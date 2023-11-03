import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    joiningTime: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const User = mongoose.model("User", UserSchema);

export default User;
