import mongoose, { Document, Schema } from 'mongoose'

export interface ITransaction extends Document {
  userId: mongoose.Types.ObjectId
  type: 'deposit' | 'withdrawal' | 'entry_fee' | 'winnings' | 'refund'
  amount: number
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  description: string
  matchId?: mongoose.Types.ObjectId
  paymentMethod?: 'upi' | 'card' | 'wallet'
  transactionId?: string // External payment gateway transaction ID
  createdAt: Date
  updatedAt: Date
}

const TransactionSchema = new Schema<ITransaction>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['deposit', 'withdrawal', 'entry_fee', 'winnings', 'refund'],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'],
    default: 'pending',
  },
  description: {
    type: String,
    required: true,
  },
  matchId: {
    type: Schema.Types.ObjectId,
    ref: 'Match',
  },
  paymentMethod: {
    type: String,
    enum: ['upi', 'card', 'wallet'],
  },
  transactionId: {
    type: String,
  },
}, {
  timestamps: true,
})

// Create indexes
TransactionSchema.index({ userId: 1, createdAt: -1 })
TransactionSchema.index({ status: 1 })
TransactionSchema.index({ type: 1 })

export default mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', TransactionSchema)
