import mongoose, { Schema } from "mongoose";

const languageSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter language name"],
      maxLength: [50, "Language name should be less than 50 characters"],
    },
  },
  { timestamps: true }
);

export const Language = mongoose.model("language", languageSchema);
