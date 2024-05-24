import mongoose, { Schema } from "mongoose";

const communitySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "Name shuold be unique!"],
      maxLength: [50, "Name should be less than 50 characters!"],
    },
    religion: {
      type: Schema.Types.ObjectId,
      ref: "Religion",
    },
  },
  { timestamps: true }
);

export const Community = mongoose.model("Community", communitySchema);
