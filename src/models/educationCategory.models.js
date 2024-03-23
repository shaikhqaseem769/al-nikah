import mongoose, { Schema } from "mongoose";

const educationCategorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Education category is required"],
      maxLength: [99, "Education type should be less than 100 character"],
    },
  },
  { timestamps: true }
);

export const EducationCategory = mongoose.model(
  "EducationCategory",
  educationCategorySchema
);
