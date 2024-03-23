import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { User } from "../../models/userauth.models.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import {
  sendEmail,
  emailVerificationMailgenContent,
} from "../../utils/mail.js";
import {
  ContactPrivateSettingEnum,
  ContactPrivateSetting,
} from "../../constants.js";

import { getStaticFilePath, getLocalPath } from "../../utils/helpers.js";

const userRegister = asyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    country_code,
    phone_number,
    password,
    created_for,
    contact_private_setting,
  } = req.body;

  const existingUser = await User.findOne({
    $or: [{ email }, { phone_number }],
  });

  if (existingUser) {
    throw new ApiError(409, "User already register with us via email/phone!");
  }

  const user = new User();

  user.first_name = first_name;
  user.last_name = last_name;
  user.first_name = first_name;
  user.email = email;
  user.country_code = country_code;
  user.phone_number = phone_number;
  user.password = password;
  user.created_for = created_for;
  user.contact_private_setting =
    contact_private_setting ||
    ContactPrivateSettingEnum["Show to members I express interest in"];
  // console.log(user);
  if (await user.save()) {
    const { unHashedToken, hashedToken, tokenExpiry } =
      user.generateTemporaryToken();

    user.email_verification_token = unHashedToken;
    user.email_verification_expiry = tokenExpiry;
    await user.save({ validateBeforeSave: false });

    await sendEmail({
      email: user?.email,
      subject: "Please verify your email",
      mailgenContent: emailVerificationMailgenContent(
        user.username,
        `${req.protocol}://${req.get(
          "host"
        )}/api/v1/users/verify-email/${unHashedToken}`
      ),
    });

    return res
      .status(201)
      .json(new ApiResponse(201, user, "User Register successfully!"));
  }

  throw new ApiError(400);
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, country_code, phone_number, password } = req.body;

  const user = await User.findOne({
    $or: [{ email }, { phone_number }],
  }).select("+password");

  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  const isPasswordValid = user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid Credentials!");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, user, "User has been logedin successfully!"));
});

const generateAccessAndRefreshTokens = async function (userId) {
  const user = await User.findById(userId);
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  return { accessToken, refreshToken };
};

const addGallery = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!req.file?.filename) {
    throw new ApiError(400, "Avatar filename is required");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  // get avatar file system url and local path
  const avatarUrl = getStaticFilePath(req, req.file?.filename);
  const avatarLocalPath = getLocalPath(req.file?.filename);

  // Set the avatar object
  const image = {
    url: avatarUrl,
    localPath: avatarLocalPath,
  };

  // user.avatar.url = avatarUrl;
  // user.avatar.localPath = avatarLocalPath;

  // Push the avatar object into the galleries array
  user.galleries.push(image);

  await user.save();
  return res
    .status(201)
    .json(new ApiResponse(201, user, "Image uploaded successfully!"));
});

const deleteGalleryImage = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;

  const user = await User.findById(userId);
  console.log(id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Find the index of the gallery item with the specified ID
  user.galleries.findByIdAndDelete(id);

  // await user.save();
  return res
    .status(201)
    .json(new ApiResponse(201, user, "Image deleted successfully!"));
});

export { userRegister, userLogin, addGallery, deleteGalleryImage };
