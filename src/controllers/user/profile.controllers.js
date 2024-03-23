import { Profile } from "../../models/profile.models.js";
import { AboutMe } from "../../models/aboutme.models.js";
import { EducationDetail } from "../../models/educationDetail.models.js";
import { CareerDetail } from "../../models/careerDetail.models.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const addBasicDetails = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let profile, message;

  if (request.user) {
    const existingProfile = await Profile.findOne({ user: request.user });
    if (existingProfile) {
      existingProfile.set(request);
      profile = await existingProfile.save();
      message = "User profile details successfully!";
    } else {
      profile = new Profile(request);
      await profile.save();
      message = "User profile details added successfully!";
    }
  }

  await profile.save();

  return res.status(201).json(new ApiResponse(201, profile, message));
});

const listBasicDeatils = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const basicDetails = await Profile.findOne({ user: userId });
  if (basicDetails) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          basicDetails,
          "Basic details retrieved successfully!"
        )
      );
  }
  throw new ApiError(404, "No detials are added!");
});

const aboutMe = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let aboutme, message;

  const existAboutMe = await AboutMe.findOne({ user: req.user._id });
  if (existAboutMe) {
    existAboutMe.set(request);
    aboutme = await existAboutMe.save();
    message = "About me updated successfully!";
  } else {
    aboutme = new AboutMe(request);
    await aboutme.save();
    message = "About me added successfully!";
  }
  return res.status(201).json(new ApiResponse(201, aboutme, message));
});

const listAboutMe = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const aboutme = await AboutMe.findOne({ user: userId });
  if (aboutme) {
    return res
      .status(200)
      .json(new ApiResponse(200, aboutme, "About me retrieved successfully!"));
  }
  throw new ApiError(404, "About me details not found!");
});

const addEducationDetails = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let educationDetails, message;
  const existEducation = await EducationDetail.findOne({ user: req.user._id });
  if (existEducation) {
    existEducation.set(request);
    educationDetails = await existEducation.save();
    message = "Education details added successfully!";
  } else {
    educationDetails = new EducationDetail(request);
    await educationDetails.save();
    message = "Education details updated successfully!";
  }
  return res.status(201).json(new ApiResponse(201, educationDetails, message));
});

const getEducationDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const educationDeatils = await EducationDetail.findOne({ user: userId });
  if (educationDeatils) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          educationDeatils,
          "Education details has been retrieved successfully!"
        )
      );
  }
  throw new ApiError(404, "Education Details not found!");
});

const addCareerDetails = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let careerDetail, message;

  let existCareerDetails = await CareerDetail.findOne({ user: request.user });
  if (existCareerDetails) {
    existCareerDetails.set(request);
    careerDetail = await existCareerDetails.save();
    message = "Career details has been updated successfully!";
  } else {
    careerDetail = new CareerDetail(request);
    careerDetail.save();
    message = "Career details has been added successfully!";
  }

  return res.status(201).json(new ApiResponse(201, careerDetail, message));
});

const getCareerDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const careerDetail = await CareerDetail.findOne({ user: userId });
  if (careerDetail) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          careerDetail,
          "Career Details retrieved successfully!"
        )
      );
  }
  throw new ApiError(404, "Career details not found!");
});

export {
  addBasicDetails,
  listBasicDeatils,
  aboutMe,
  listAboutMe,
  addEducationDetails,
  getEducationDetails,
  addCareerDetails,
  getCareerDetails,
};
