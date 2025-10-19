import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

// GET /api/users - Get all users (for admin)
export async function GET() {
  try {
    await connectDB()
    const users = await User.find({ isActive: true }).select('-__v').sort({ rank: -1 })
    return NextResponse.json({ success: true, data: users })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch users' }, { status: 500 })
  }
}

// POST /api/users - Create new user
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const { phoneNumber, email, pubgId, username } = body

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { pubgId }, { phoneNumber }]
    })

    if (existingUser) {
      return NextResponse.json({ 
        success: false, 
        error: 'User already exists with this email, PUBG ID, or phone number' 
      }, { status: 400 })
    }

    const user = new User({
      phoneNumber,
      email,
      pubgId,
      username,
      walletBalance: 0,
      totalWinnings: 0,
      matchesPlayed: 0,
      matchesWon: 0,
      rank: 0,
      isActive: true,
    })

    await user.save()
    return NextResponse.json({ success: true, data: user }, { status: 201 })
  } catch (error) {
    console.error('User creation error:', error)
    return NextResponse.json({ 
      success: false, 
      error: `Failed to create user: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }, { status: 500 })
  }
}
