import mongoose, { Schema, mongo } from "mongoose";

const religionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Name is required!"],
      unique: [true, "Name should be unique!"],
      maxLength: [50, "Name should be less than 50 charachters"],
    },
  },
  { timestamps: true }
);

export const Religion = mongoose.model("Religion", religionSchema);
