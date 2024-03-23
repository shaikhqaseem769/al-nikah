import { Education } from "../../models/education.models.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const addEducation = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const isExist = await Education.findOne({
    name: { $regex: new RegExp("^" + name + "$", "i") },
  });
  if (isExist) {
    throw new ApiError(409, "Already added!");
  }
  const education = new Education();
  education.name = name;
  education.education = education;
  if (education.save()) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          education,
          "Education category added successfully!"
        )
      );
  }
  throw new ApiError(409, "Oops something went wrong");
});

const listEducation = asyncHandler(async (req, res) => {
  const educationCategories = await Education.find();
  if (educationCategories.length > 0) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          educationCategories,
          "Education category retrieved succesfully!"
        )
      );
  }
  throw new ApiError(404, "Not found!");
});

const updateEducation = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const education = await Education.findById(id);
  if (!education) {
    throw new ApiError(409, "Already added!");
  }

  education.name = name;
  education.education = education;
  if (education.save()) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          education,
          "Education category added successfully!"
        )
      );
  }
  throw new ApiError(409, "Oops something went wrong");
});

const deleteEducation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const education = await Education.findById(id);
  if (education) {
    await education.deleteOne();
    return res
      .status(200)
      .json(
        new ApiResponse(200, {}, "Education category delete successfully!")
      );
  }
  throw new ApiError(404, "Education category not found!");
});
export { addEducation, listEducation, updateEducation, deleteEducation };
