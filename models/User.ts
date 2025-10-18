import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  phoneNumber?: string
  email: string
  pubgId: string
  username: string
  walletBalance: number
  totalWinnings: number
  matchesPlayed: number
  matchesWon: number
  rank: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>({
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  pubgId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  walletBalance: {
    type: Number,
    default: 0,
  },
  totalWinnings: {
    type: Number,
    default: 0,
  },
  matchesPlayed: {
    type: Number,
    default: 0,
  },
  matchesWon: {
    type: Number,
    default: 0,
  },
  rank: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

// Create indexes for better performance
UserSchema.index({ email: 1 }, { unique: true })
UserSchema.index({ pubgId: 1 }, { unique: true })
UserSchema.index({ phoneNumber: 1 }, { unique: true, sparse: true })
UserSchema.index({ rank: -1 }) // For leaderboards

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
