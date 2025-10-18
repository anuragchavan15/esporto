import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'

// POST /api/auth/login - Login user (phone/email)
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const { phoneNumber, email, otp } = body

    // For demo purposes, we'll accept any OTP as valid
    // In production, implement proper OTP verification
    if (otp && otp.length !== 6) {
      return NextResponse.json({ success: false, error: 'Invalid OTP' }, { status: 400 })
    }

    let user
    if (phoneNumber) {
      user = await User.findOne({ phoneNumber })
    } else if (email) {
      user = await User.findOne({ email })
    } else {
      return NextResponse.json({ success: false, error: 'Phone number or email is required' }, { status: 400 })
    }

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })
    }

    if (!user.isActive) {
      return NextResponse.json({ success: false, error: 'Account is deactivated' }, { status: 403 })
    }

    return NextResponse.json({ 
      success: true, 
      data: {
        id: user._id,
        username: user.username,
        email: user.email,
        pubgId: user.pubgId,
        walletBalance: user.walletBalance,
        totalWinnings: user.totalWinnings,
        matchesPlayed: user.matchesPlayed,
        matchesWon: user.matchesWon,
        rank: user.rank,
      }
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 })
  }
}
