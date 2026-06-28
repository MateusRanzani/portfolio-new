import mongoose, { Schema } from "mongoose";

const CommentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "comments",
  }
);

export const Comments =
  mongoose.models.Comments || mongoose.model("Comments", CommentsSchema);
