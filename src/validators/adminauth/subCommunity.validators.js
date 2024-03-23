import { body, param } from "express-validator";

const addSubCommunityValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("Name is required!"),
    body("community")
      .trim()
      .notEmpty()
      .withMessage("Community id is required!")
      .exists()
      .withMessage("community must exist in the request"),
  ];
};

const updateSubCommunityValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Community id is required!")
      .exists()
      .withMessage("Community id must exist in the request"),
    body("name").trim().notEmpty().withMessage("Name is required!"),
    body("community")
      .trim()
      .notEmpty()
      .withMessage("community id is required!")
      .exists()
      .withMessage("community must exist in the request body"),
  ];
};

const deleteSubCommunityValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Community id is required!")
      .exists()
      .withMessage("Community id must exist in the request"),
  ];
};

export {
  addSubCommunityValidator,
  updateSubCommunityValidator,
  deleteSubCommunityValidator,
};
