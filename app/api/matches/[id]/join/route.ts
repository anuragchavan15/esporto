import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Match from '@/models/Match'
import User from '@/models/User'
import Transaction from '@/models/Transaction'

// POST /api/matches/[id]/join - Join a match
export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    const body = await request.json()
    const { userId, username, pubgId } = body

    // Find the match
    const match = await Match.findById(params.id)
    if (!match) {
      return NextResponse.json({ success: false, error: 'Match not found' }, { status: 404 })
    }

    // Check if match is still open
    if (match.status !== 'upcoming') {
      return NextResponse.json({ success: false, error: 'Match is no longer accepting participants' }, { status: 400 })
    }

    // Check if match is full
    if (match.playersJoined >= match.maxPlayers) {
      return NextResponse.json({ success: false, error: 'Match is full' }, { status: 400 })
    }

    // Check if user already joined
    const alreadyJoined = match.participants.some(p => p.userId.toString() === userId)
    if (alreadyJoined) {
      return NextResponse.json({ success: false, error: 'You have already joined this match' }, { status: 400 })
    }

    // Check user's wallet balance
    const user = await User.findById(userId)
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })
    }

    if (user.walletBalance < match.entryFee) {
      return NextResponse.json({ success: false, error: 'Insufficient wallet balance' }, { status: 400 })
    }

    // Deduct entry fee from user's wallet
    user.walletBalance -= match.entryFee
    await user.save()

    // Add user to match participants
    match.participants.push({
      userId,
      username,
      pubgId,
      joinedAt: new Date(),
    })
    match.playersJoined += 1
    await match.save()

    // Create transaction record
    const transaction = new Transaction({
      userId,
      type: 'entry_fee',
      amount: match.entryFee,
      status: 'completed',
      description: `Entry fee for match: ${match.name}`,
      matchId: match._id,
    })
    await transaction.save()

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the match',
      data: { match, user: { walletBalance: user.walletBalance } }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to join match' }, { status: 500 })
  }
}
