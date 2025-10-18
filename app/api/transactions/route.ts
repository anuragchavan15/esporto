import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Transaction from '@/models/Transaction'

// GET /api/transactions - Get transactions for a user
export async function GET(request: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID is required' }, { status: 400 })
    }

    const transactions = await Transaction.find({ userId })
      .populate('matchId', 'name')
      .sort({ createdAt: -1 })
      .select('-__v')

    return NextResponse.json({ success: true, data: transactions })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch transactions' }, { status: 500 })
  }
}

// POST /api/transactions - Create new transaction (deposit/withdrawal)
export async function POST(request: NextRequest) {
  try {
    await connectDB()
    const body = await request.json()
    const { userId, type, amount, description, paymentMethod } = body

    const transaction = new Transaction({
      userId,
      type,
      amount,
      status: 'pending',
      description,
      paymentMethod,
    })

    await transaction.save()
    return NextResponse.json({ success: true, data: transaction }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create transaction' }, { status: 500 })
  }
}
