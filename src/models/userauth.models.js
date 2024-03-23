import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import {
  AvailableUserRoles,
  CreatedFor,
  CreatedForEnum,
  AvailableSocialLogins,
  UserLoginType,
  ContactPrivateSettingEnum,
  ContactPrivateSetting,
  USER_TEMPORARY_TOKEN_EXPIRY,
} from "../constants.js";

const imageSchema = new mongoose.Schema(
  {
    url: String,
    localPath: String,
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
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
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: `https://via.placeholder.com/200x200.png`,
        localPath: "",
      },
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    contact_private_setting: {
      type: Number,
      trim: true,
      enum: ContactPrivateSettingEnum,
    },
    created_for: {
      type: String,
      enum: CreatedForEnum,
      default: CreatedFor.Self,
      trim: true,
    },
    role: {
      type: String,
      enum: AvailableUserRoles,
      default: AvailableUserRoles.USER,
      // required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      maxLength: [20, "Password should be less than 20 characters!"],
      minLength: [8, "Password should be minimun 8 characters!"],
      select: false,
    },
    login_type: {
      type: String,
      enum: AvailableSocialLogins,
      default: UserLoginType.EMAIL_PASSWORD,
    },
    is_email_verified: {
      type: Boolean,
      default: false,
    },
    refresh_token: {
      type: String,
    },
    forgot_password_token: {
      type: String,
    },
    forgot_password_expiry: {
      type: Date,
    },
    email_verification_token: {
      type: String,
    },
    email_verification_expiry: {
      type: Date,
    },
    galleries: [imageSchema],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.isPasswordCorrect = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAccessToken = function () {
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

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateTemporaryToken = function () {
  const unHashedToken = crypto.randomBytes(20).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(unHashedToken)
    .digest("hex");
  const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY;
  return { unHashedToken, hashedToken, tokenExpiry };
};
export const User = mongoose.model("User", userSchema);
