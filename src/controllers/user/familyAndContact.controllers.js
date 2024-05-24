import { FamilyDetail } from "../../models/familyDetail.models.js";
import { ContactDetail } from "../../models/contactDetail.models.js";
import { ReligiousBeliefs } from "../../models/religiousBeliefs.models.js";
import { LifeStyle } from "../../models/lifeStyle.models.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const addFamilyDetails = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let familyDetail, message;
  const existFamiltyDetail = await FamilyDetail.findOne({ user: request.user });
  if (existFamiltyDetail) {
    existFamiltyDetail.set(request);
    familyDetail = await existFamiltyDetail.save();
    message = "Family Details has been updated successfully!";
  } else {
    familyDetail = new FamilyDetail(request);
    familyDetail.save();
    message = "Family Details has been added successfully!";
  }

  return res.status(201).json(new ApiResponse(201, familyDetail, message));
});

const getFamilyDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const famityDetails = await FamilyDetail.findOne({
    user: userId,
  });

  if (famityDetails) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          famityDetails,
          "Family details has been retrieved successfully!"
        )
      );
  }
  throw new ApiError(404, "Family details not found!");
});

const addContactDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const requestData = req.body;
  requestData.user = req.user._id;

  let contactDetail, message;
  const existContactDetails = await ContactDetail.findOne({ user: userId });
  if (existContactDetails) {
    existContactDetails.set(requestData);
    contactDetail = await existContactDetails.save();
    message = "Contact details has been updated successfully!";
  } else {
    contactDetail = new ContactDetail(requestData);
    contactDetail.save({ new: true, upsert: true, setDefaultsOnInsert: true });
  }

  return res.status(200).json(new ApiResponse(200, contactDetail, message));
});

const listContactDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const contactDetail = await ContactDetail.findOne({ user: userId });
  if (contactDetail) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          contactDetail,
          "Contact details retrieved successfully!"
        )
      );
  }
  return res.status(404).json(new ApiError(404, "Contact details not found!"));
});

const addReligiousBeliefs = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let religiousBeliefs, message;

  const existReligiousBeliefs = await ReligiousBeliefs.findOne({
    user: request.user,
  });

  if (existReligiousBeliefs) {
    existReligiousBeliefs.set(request);
    religiousBeliefs = await existReligiousBeliefs.save();
    message = "Religious beliefs updated successfully!";
  } else {
    religiousBeliefs = new ReligiousBeliefs(request);
    religiousBeliefs.save();
    message = "Religious beliefs added successfully!";
  }

  return res.status(201).json(new ApiResponse(201, religiousBeliefs, message));
});

const listReligiousBeliefs = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const religiousBeliefs = await ReligiousBeliefs.find({ user: userId });
  if (religiousBeliefs) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          religiousBeliefs,
          "Religious Beliefs retrieved successfully!"
        )
      );
  }
  return res
    .status(404)
    .json(new ApiError(404, "Religious Beliefs not found!"));
});

const addLifestyleInterests = asyncHandler(async (req, res) => {
  const request = req.body;
  request.user = req.user._id;
  let myLifestyle, message;

  const myLifestyleExist = await LifeStyle.findOne({ user: request.user });
  if (myLifestyleExist) {
    myLifestyleExist.set(request);
    myLifestyle = await myLifestyleExist.save();
    message = "Life style has been updated successfully!";
  } else {
    myLifestyle = new LifeStyle(request);
    myLifestyle.save();
    message = "Life style has been added successfully!";
  }

  return res.status(201).json(new ApiResponse(201, myLifestyle, message));
});

const listLifestyleInterests = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const lifeStyle = await LifeStyle.find({ user: userId });
  if (lifeStyle) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          lifeStyle,
          "LifeStyle & interest retrieved successfully!"
        )
      );
  }
  return res
    .status(404)
    .json(new ApiError(404, "LifeStyle & interest not found!"));
});

export {
  addFamilyDetails,
  getFamilyDetails,
  addContactDetails,
  listContactDetails,
  addReligiousBeliefs,
  listReligiousBeliefs,
  addLifestyleInterests,
  listLifestyleInterests,
};
