import mongoose from "mongoose";

const { Schema } = mongoose;

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false, // Default to false for regular admins
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AdminLogin", AdminSchema);
