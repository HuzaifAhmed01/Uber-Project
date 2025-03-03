import mongoose from 'mongoose';

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    expires: '24h', // TTL for 24 hours
  },
});

const BlacklistedTokenModel = mongoose.model('BlacklistedToken', blacklistedTokenSchema);

export default BlacklistedTokenModel;