import mongoose, { Schema } from "mongoose";
import {
  FamilyStatusIn,
  FamilyType,
  FamilyValues,
  FamityIncome,
  LivingWithParents,
  FatherOccupation,
  NoOfBrothers,
} from "../constants.js";

const familyDetailSchema = new Schema(
  {
    family_status: {
      type: String,
      trim: true,
      required: true,
      enum: FamilyStatusIn,
    },
    family_type: {
      type: String,
      trim: true,
      required: true,
      enum: FamilyType,
    },
    family_values: {
      type: String,
      trim: true,
      required: true,
      enum: FamilyValues,
    },
    living_with_parents: {
      type: String,
      trim: true,
      required: true,
      enum: LivingWithParents,
    },
    family_income: {
      type: String,
      trim: true,
      required: true,
      enum: FamityIncome,
    },
    father_occupation: {
      type: String,
      trim: true,
      required: true,
      enum: FatherOccupation,
    },
    mother_occupation: {
      type: String,
      trim: true,
      required: true,
      enum: FatherOccupation,
    },
    no_of_brothers: {
      type: String,
      trim: true,
      required: true,
      enum: NoOfBrothers,
    },
    no_of_married_brothers: {
      type: String,
      trim: true,
      required: true,
      enum: NoOfBrothers,
    },
    no_of_sisters: {
      type: String,
      trim: true,
      required: true,
      enum: NoOfBrothers,
    },
    no_of_married_sisters: {
      type: String,
      trim: true,
      required: true,
      enum: NoOfBrothers,
    },
    family_based_out_of: {
      type: String,
      trim: true,
      required: true,
    },
    about_my_family: {
      type: String,
      trim: true,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const FamilyDetail = mongoose.model("FamilyDetail", familyDetailSchema);
