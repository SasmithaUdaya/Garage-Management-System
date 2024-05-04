import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    userRef: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
      unique: true,
    },
    Rating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const feedback = mongoose.model('Feedback', feedbackSchema);
