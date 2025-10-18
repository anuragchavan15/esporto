import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Match from '@/models/Match'

// GET /api/matches - Get all matches
export async function GET() {
  try {
    await connectDB()
    const matches = await Match.find()
      .populate('participants.userId', 'username pubgId')
      .sort({ startTime: 1 })
      .select('-__v')
    
    return NextResponse.json({ success: true, data: matches })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch matches' }, { status: 500 })
  }
}

// POST /api/matches - Create new match
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const { name, map, mode, entryFee, prizePool, maxPlayers, startTime } = body

    const match = new Match({
      name,
      map,
      mode,
      entryFee,
      prizePool,
      maxPlayers,
      playersJoined: 0,
      startTime: new Date(startTime),
      status: 'upcoming',
      participants: [],
    })

    await match.save()
    return NextResponse.json({ success: true, data: match }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create match' }, { status: 500 })
  }
}
