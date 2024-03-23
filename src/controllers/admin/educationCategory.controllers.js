import { EducationCategory } from "../../models/educationCategory.models.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

const addEducationCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const isExist = await EducationCategory.findOne({
    name: { $regex: new RegExp("^" + name + "$", "i") },
  });
  if (isExist) {
    throw new ApiError(409, "Already added!");
  }
  const educationCategory = new EducationCategory();
  educationCategory.name = name;
  if (educationCategory.save()) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          educationCategory,
          "Education category added successfully!"
        )
      );
  }
  throw new ApiError(409, "Oops something went wrong");
});

const listEducationCategory = asyncHandler(async (req, res) => {
  const educationCategories = await EducationCategory.find();
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

const updateEducationCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const educationCategory = await EducationCategory.findById(id);
  if (!educationCategory) {
    throw new ApiError(409, "Already added!");
  }

  educationCategory.name = name;
  if (educationCategory.save()) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          educationCategory,
          "Education category added successfully!"
        )
      );
  }
  throw new ApiError(409, "Oops something went wrong");
});

const deleteEducationCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const educationCategory = await EducationCategory.findById(id);
  if (educationCategory) {
    await educationCategory.deleteOne();
    return res
      .status(200)
      .json(
        new ApiResponse(200, {}, "Education category delete successfully!")
      );
  }
  throw new ApiError(404, "Education category not found!");
});
export {
  addEducationCategory,
  listEducationCategory,
  updateEducationCategory,
  deleteEducationCategory,
};
