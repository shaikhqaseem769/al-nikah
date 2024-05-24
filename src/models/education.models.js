import mongoose, { Schema } from "mongoose";

const educationSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Education name required"],
      maxLength: [100, "Education name should be less than 100 characters!"],
    },
    education: {
      type: Schema.Types.ObjectId,
      ref: "EducationCategory",
    },
  },
  { timestamps: true }
);

export const Education = mongoose.model("Education", educationSchema);
