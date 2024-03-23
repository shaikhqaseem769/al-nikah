import mongoose, { Schema } from "mongoose";
import {
  EmployedIn,
  EmployedInEnum,
  InterestedIn,
  InterestedInEnum,
} from "../constants.js";

const CareerDetailSchema = new Schema(
  {
    employed_in: {
      type: String,
      trim: true,
      required: true,
      enum: EmployedIn,
      default: EmployedInEnum[1],
    },
    occupation: {
      type: String,
      trim: true,
      required: true,
    },
    organisation_name: {
      type: String,
      trim: true,
      required: true,
    },
    interested_in_settling_abroad: {
      type: String,
      trim: true,
      required: true,
      enum: InterestedInEnum,
    },
    about_my_career: {
      type: String,
      trim: true,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const CareerDetail = mongoose.model("CareerDetail", CareerDetailSchema);
