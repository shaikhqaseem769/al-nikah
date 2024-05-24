import mongoose, { Schema } from "mongoose";

const educationDetailSchema = new Schema(
  {
    highest_education: {
      type: Schema.Types.ObjectId,
      ref: "Education",
    },
    ug_degree: {
      type: Schema.Types.ObjectId,
      ref: "Education",
    },
    ug_college: {
      type: String,
      trim: true,
      require: [true, "UG college is required"],
      maxLength: [100, "UG college should be less than 100 characters!"],
    },
    school_name: {
      type: String,
      trim: true,
      require: [true, "School name is required"],
      maxLength: [249, "School name should be less than 250 characters!"],
    },
    about_my_education: {
      type: String,
      trim: true,
      require: [true, "School name is required"],
      maxLength: [
        4999,
        "About my education should be less than 5000 characters!",
      ],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const EducationDetail = mongoose.model(
  "EducationDetail",
  educationDetailSchema
);
