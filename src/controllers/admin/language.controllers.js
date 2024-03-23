import { Language } from "../../models/language.models.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

const addNewLanguage = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const isExist = await Language.findOne({
    name: { $regex: new RegExp("^" + name + "$", "i") },
  });

  if (isExist) {
    throw new ApiError(409, "Language already exists!");
  }
  const language = await Language.create(req.body);
  return res
    .status(201)
    .json(
      new ApiResponse(201, language, "Language has been created successfully!")
    );
});

const listAllLanguage = asyncHandler(async (req, res) => {
  const languages = await Language.find();
  if (languages.length > 0) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          languages,
          "All languages have been retrieved successfully!"
        )
      );
  }

  return res.status(404).json(new ApiError(404, "Languages not found"));
});

const updateLanguage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const language = await Language.findById(id);

  if (language) {
    language.name = name;
    await language.save();

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          language,
          "Language has been updated successfully!"
        )
      );
  }

  throw new ApiError(404, "Language not found");
});

const deleteLanguage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const isExist = await Language.findById(id);
  if (isExist) {
    await isExist.deleteOne();
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Language deleted successfully!"));
  }

  throw new ApiError(404, "Language not found");
});

export { addNewLanguage, updateLanguage, deleteLanguage, listAllLanguage };
