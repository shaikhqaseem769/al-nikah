import mongoose, { Schema } from "mongoose";

const myLifestyleSchema = new Schema(
  {
    dietary_habits: {
      type: String,
      trim: true,
      required: [true, "Dietary Habits is required!"],
    },
    drinking_habits: {
      type: String,
      trim: true,
      required: [true, "Drinking Habitss is required!"],
    },
    smoking_habits: {
      type: String,
      trim: true,
      required: [true, "Smoking Habits is required!"],
    },
    assets: {
      type: String,
      trim: true,
      required: [true, "Assets is required!"],
    },
    hobbies: {
      type: String,
      trim: true,
      required: [true, "Hobbies is required!"],
    },
    interests: {
      type: String,
      trim: true,
      required: [true, "Interest is required!"],
    },
    languages_i_speak: {
      type: String,
      trim: true,
      required: [true, "Languages i speak is required!"],
    },
    food_i_cook: {
      type: String,
      trim: true,
      required: [true, "Food i cook is required!"],
    },
    cuisine: {
      type: String,
      trim: true,
      required: [true, "Cuisine is required!"],
    },

    favourite_music: {
      type: String,
      trim: true,
      required: [true, "Favourite Music is required!"],
    },
    dress_style: {
      type: String,
      trim: true,
      required: [true, "Dress style is required!"],
    },
    sports: {
      type: String,
      trim: true,
      required: [true, "Dress style is required!"],
    },
    favourite_read: {
      type: String,
      trim: true,
      required: [true, "Favourite read is required!"],
    },
    favourite_books: {
      type: String,
      trim: true,
      required: [true, "Favourite book is required!"],
    },
    movies: {
      type: String,
      trim: true,
      required: [true, "Movies is required!"],
    },
    tv_shows: {
      type: String,
      trim: true,
      required: [true, "TV shows is required!"],
    },
    vacation_destination: {
      type: String,
      trim: true,
      required: [true, "Vacation Destination is required!"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const LifeStyle = mongoose.model("LifeStyle", myLifestyleSchema);
