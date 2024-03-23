import { AdminUser } from "../../models/adminauth.models.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

// @desc        Register Admin
// @route        POST /api/v1/public
// @access       Public

const adminUserRegister = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, country_code, phone_number, password } =
    req.body;

  const alreadyExist = await AdminUser.findOne({
    $or: [{ email }, { phone_number }],
  });

  if (alreadyExist) {
    throw new ApiError(409, "User with email or username already exists", []);
  }

  const admin = await AdminUser.create({
    first_name,
    last_name,
    email,
    country_code,
    phone_number,
    password,
  });
  admin.password = undefined;

  return res
    .status(200)
    .json(new ApiResponse(201, admin, "Admin user added successfully!"));
});

const adminLoginUser = asyncHandler(async (req, res) => {
  const { email, phone_number, password } = req.body;

  if (!email && !phone_number) {
    throw new ApiError(400, "Please enter email/phone number!");
  }
  const user = await AdminUser.findOne({
    $or: [{ email }, { phone_number }],
  }).select("+password");

  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid credentials!");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  user.password = undefined;

  // TODO: Add more options to make cookie more secure and reliable
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, user, "User logged in successfully!"));
});

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await AdminUser.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;

    await user.save({ validationBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating the access token"
    );
  }
};

export { adminUserRegister, adminLoginUser };
