import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: String,
  otpExpires: Date,
});

export default mongoose.model('User', userSchema);
