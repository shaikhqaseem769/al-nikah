import mongoose, { Schema } from "mongoose";
import {
  CreatedFor,
  Disability,
  DisabilityEnum,
  Thalassemia,
  ThalassemiaEnum,
  Hiv,
  HivEnum,
} from "../constants.js";

const aboutMeSchema = new Schema(
  {
    about_me: {
      type: String,
      required: true,
      trim: true,
    },
    created_for: {
      type: String,
      required: true,
      trim: true,
      enum: CreatedFor,
    },
    disability: {
      type: Number,
      required: true,
      trim: true,
      enum: Disability,
      default: DisabilityEnum[1],
    },
    thalassemia: {
      type: Number,
      required: true,
      trim: true,
      enum: Thalassemia,
      default: ThalassemiaEnum[3],
    },
    hiv: {
      type: Number,
      required: true,
      trim: true,
      enum: Hiv,
      default: HivEnum[2],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const AboutMe = mongoose.model("AboutMe", aboutMeSchema);
