import mongoose, { Schema } from "mongoose";

const contactDetailSchema = new Schema(
  {
    email_id: {
      type: String,
      trim: true,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      maxLength: [250, "Email should be less than 250 characters!"],
    },
    alternet_email_id: {
      type: String,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      maxLength: [250, "Email should be less than 250 characters!"],
    },
    country_code: {
      type: String,
      required: true,
      maxLength: [4, "country code should be less than 4 character!"],
      trim: true,
    },
    phone_number: {
      type: String,
      required: true,
      maxLength: [10, "Phone number should be less than 10 character!"],
      trim: true,
    },
    phone_number_owned_by: {
      type: String,
      trim: true,
    },
    alernate_country_code: {
      type: String,
      required: true,
      maxLength: [4, "country code should be less than 4 character!"],
      trim: true,
    },
    alernate_phone_number: {
      type: String,
      required: true,
      maxLength: [10, "Phone number should be less than 10 character!"],
      trim: true,
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

export const ContactDetail = mongoose.model(
  "ContactDetail",
  contactDetailSchema
);
