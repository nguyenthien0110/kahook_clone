import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username is already taken"],
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already in use"],
    trim: true,
    lowercase: true,
  },
});

export const User =
  mongoose.models.User || mongoose.model<User>("User", userSchema);
