import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { SubCommunity } from "../../models/Subcommunity.models.js";

const addSubCommunity = asyncHandler(async (req, res) => {
  const { name, community } = req.body;
  const isExist = await SubCommunity.findOne({
    name: { $regex: new RegExp("^" + name + "$", "i") },
  });
  if (isExist) {
    throw new ApiError(409, "Already Exist!");
  }
  const subcommunity = SubCommunity();
  subcommunity.name = name;
  subcommunity.community = community;
  if (subcommunity.save()) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          subcommunity,
          "Sub community has been added successfully!"
        )
      );
  }
});

const updateSubCommunity = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, community } = req.body;
  const subcommunity = await SubCommunity.findById(id);
  if (subcommunity) {
    subcommunity.name = name;
    subcommunity.community = community;
    if (subcommunity.save()) {
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            subcommunity,
            "SubCommunity updated successfully!"
          )
        );
    }
  }

  throw new ApiError(404, "SubCommunity not found!");
});

const listSubCommunity = asyncHandler(async (req, res) => {
  const communities = await SubCommunity.find();
  if (communities.length > 0) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          communities,
          "All communities has been retrieved successfully!"
        )
      );
  }
});

const listComminutySubCommunity = asyncHandler(async (req, res) => {
  const { community_id } = req.params;

  const communities = await SubCommunity.find({ community: community_id });
  if (communities.length > 0) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          communities,
          "All communities has been retrieved successfully!"
        )
      );
  }
});

const deleteSubCommunity = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const subcommunity = await SubCommunity.findById(id);

  if (subcommunity) {
    await subcommunity.deleteOne();
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Sub Community deleted successfully!"));
  }
  throw new ApiError(404, "Sub Community not found!");
});
export {
  addSubCommunity,
  updateSubCommunity,
  listSubCommunity,
  listComminutySubCommunity,
  deleteSubCommunity,
};
