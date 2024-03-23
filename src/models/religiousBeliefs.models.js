import mongoose, { Schema } from "mongoose";

const religiousBeliefsSchema = new Schema(
  {
    namaz: {
      type: String,
      trim: true,
      required: [true, "Namaz is required!"],
    },
    zakat: {
      type: String,
      trim: true,
      required: [true, "Zakat is required!"],
    },
    when_do_you_practice_fasting: {
      type: String,
      trim: true,
      required: [true, "When do you practice fasting is required!"],
    },
    umarah_hajj: {
      type: String,
      trim: true,
      required: [true, "Umarah hajj is required!"],
    },
    how_do_you_often_read_the_quran: {
      type: String,
      trim: true,
      required: [true, "How do you often read the Quran is required!"],
    },
    sunnah_beard: {
      type: String,
      trim: true,
      required: [true, "Sunnah Beard is required!"],
    },
    sunnah_cap: {
      type: String,
      trim: true,
      required: [true, "Sunnah Cap is required!"],
    },
    can_the_girl_work_after_marriage: {
      type: String,
      trim: true,
      required: [true, "Can the girl work after marriage is required!"],
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

export const ReligiousBeliefs = mongoose.model(
  "ReligiousBeliefs",
  religiousBeliefsSchema
);
