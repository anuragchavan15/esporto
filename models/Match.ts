import mongoose, { Document, Schema } from 'mongoose'

export interface IMatch extends Document {
  name: string
  map: string
  mode: 'Solo' | 'Duo' | 'Squad'
  entryFee: number
  prizePool: number
  maxPlayers: number
  playersJoined: number
  startTime: Date
  status: 'upcoming' | 'live' | 'completed' | 'cancelled'
  winner?: {
    userId: mongoose.Types.ObjectId
    username: string
    pubgId: string
    winnings: number
  }
  participants: Array<{
    userId: mongoose.Types.ObjectId
    username: string
    pubgId: string
    joinedAt: Date
  }>
  createdAt: Date
  updatedAt: Date
}

const MatchSchema = new Schema<IMatch>({
  name: {
    type: String,
    required: true,
  },
  map: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    enum: ['Solo', 'Duo', 'Squad'],
    required: true,
  },
  entryFee: {
    type: Number,
    required: true,
  },
  prizePool: {
    type: Number,
    required: true,
  },
  maxPlayers: {
    type: Number,
    required: true,
  },
  playersJoined: {
    type: Number,
    default: 0,
  },
  startTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['upcoming', 'live', 'completed', 'cancelled'],
    default: 'upcoming',
  },
  winner: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
    pubgId: String,
    winnings: Number,
  },
  participants: [{
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    pubgId: {
      type: String,
      required: true,
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
})

// Create indexes
MatchSchema.index({ status: 1, startTime: 1 })
MatchSchema.index({ 'participants.userId': 1 })

export default mongoose.models.Match || mongoose.model<IMatch>('Match', MatchSchema)
