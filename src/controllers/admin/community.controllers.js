import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { Community } from "../../models/community.models.js";

const addCommunity = asyncHandler(async (req, res) => {
  const { name, religion } = req.body;
  const isExist = await Community.findOne({
    name: { $regex: new RegExp("^" + name + "$", "i") },
  });
  if (isExist) {
    throw new ApiError(409, "Already Exist!");
  }
  const community = Community();
  community.name = name;
  community.religion = religion;
  if (community.save()) {
    return res
      .status(201)
      .json(
        new ApiResponse(
          201,
          community,
          "Community has been added successfully!"
        )
      );
  }
});

const updateCommunity = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, religion } = req.body;
  const community = await Community.findById(id);
  if (community) {
    community.name = name;
    community.religion = religion;
    if (community.save()) {
      return res
        .status(200)
        .json(
          new ApiResponse(200, community, "Community updated successfully!")
        );
    }
  }

  throw new ApiError(404, "Community not found!");
});

const listCommunity = asyncHandler(async (req, res) => {
  const communities = await Community.find();
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

const listReligionCommunity = asyncHandler(async (req, res) => {
  const { religion_id } = req.params;

  const communities = await Community.find({ religion: religion_id });
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

const deleteCommunity = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const community = await Community.findById(id);

  if (community) {
    await community.deleteOne();
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Community deleted successfully!"));
  }
  throw new ApiError(404, "Community not found!");
});
export {
  addCommunity,
  updateCommunity,
  listCommunity,
  listReligionCommunity,
  deleteCommunity,
};
