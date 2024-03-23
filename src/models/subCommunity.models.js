import mongoose, { Schema } from "mongoose";

const subCommunitySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "Name shuold be unique!"],
      maxLength: [50, "Name should be less than 50 characters!"],
    },
    community: {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  },
  { timestamps: true }
);

export const SubCommunity = mongoose.model("SubCommunity", subCommunitySchema);
