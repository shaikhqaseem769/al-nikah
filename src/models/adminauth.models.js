import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AvailableUserRoles } from "../constants.js";

const adminAuthSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      maxLength: [50, "First name should be less than 50 characters"],
      trim: true,
    },
    last_name: {
      // Corrected field name from 'lasst_name' to 'last_name'
      type: String,
      required: true,
      maxLength: [50, "Last name should be less than 50 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      maxLength: [250, "Email should be less than 250 characters!"],
      trim: true,
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
    password: {
      type: String,
      required: true,
      maxLength: [50, "Password should be less than 50 character!"],
      trim: true,
      select: false,
    },

    role: {
      type: String,
      enum: AvailableUserRoles,
      default: AvailableUserRoles.USER,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Middleware to hash the password before saving
adminAuthSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

adminAuthSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

adminAuthSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      phone_number: this.phone_number,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

adminAuthSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const AdminUser = mongoose.model("AdminUser", adminAuthSchema);
