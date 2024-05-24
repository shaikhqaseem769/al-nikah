import mongoose, { Schema } from "mongoose";
import { AnnualEncome, Gender, Height, MaritalStatus } from "../constants.js";

const profileSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      maxLength: [50, "First name should be less than 50 characters"],
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      maxLength: [50, "Last name should be less than 50 characters"],
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      enum: Gender,
      maxLength: [50, "Gender should be less than 50 characters"],
    },
    dob: {
      type: Date,
      required: true,
    },
    marital_status: {
      type: String,
      required: true,
      enum: MaritalStatus,
      maxLength: [60, "Marital status should be less than 60 characters"],
    },
    height: {
      type: String,
      required: true,
      enum: Height,
    },
    religion: {
      type: String,
      required: true,
      maxLength: [50, "Religion should be less than 50 characters"],
    },
    sect: {
      type: String,
      required: true,
      maxLength: [50, "Sect should be less than 50 characters"],
    },
    cast: {
      type: String,
      required: true,
      maxLength: [50, "Cast should be less than 50 characters"],
    },
    jamaat: {
      type: String,
      required: true,
      maxLength: [50, "Jamaat should be less than 50 characters"],
    },
    mother_tongue: {
      type: String,
      required: true,
      maxLength: [50, "Mother Tongue should be less than 50 characters"],
    },
    current_location: {
      type: String,
      required: true,
      maxLength: [50, "Current location should be less than 50 characters"],
    },
    annual_income: {
      type: String,
      required: true,
      enum: AnnualEncome,
      maxLength: [50, "Annual income should be less than 50 characters"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("BasicDetails", profileSchema);
