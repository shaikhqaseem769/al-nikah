import { Religion } from "../../models/religion.models.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const addReligion = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const isExist = await Religion.findOne({
    name: { $regex: new RegExp("^" + name + "$", "i") },
  });
  if (isExist) {
    throw new ApiError(409, "Religion already exists!");
  }
  const religion = new Religion();
  religion.name = name;

  religion.save();
  return res
    .status(201)
    .json(
      new ApiResponse(201, religion, "Religion has been created successfully!")
    );
});

const listReligion = asyncHandler(async (req, res) => {
  const religions = await Religion.find();
  if (religions.length > 0) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          religions,
          "All religion have been retrieved successfully!"
        )
      );
  }
  throw new ApiError(404, "No religion found!");
});

const updateReligion = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const religion = await Religion.findById(id);

  if (!religion) {
    throw new ApiError(404, "Religion not found!");
  }
  religion.name = name;
  //   religion.communities = communities;

  if (religion.save()) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          religion,
          "Religion has been updated successfully!"
        )
      );
  }
});

const deleteRelegion = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const religion = await Religion.findById(id);
  if (religion) {
    await religion.deleteOne();
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Religion has been delete successfully!"));
  }
});
export { addReligion, updateReligion, listReligion, deleteRelegion };
