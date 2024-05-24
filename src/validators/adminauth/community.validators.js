import { body, param } from "express-validator";

const addCommunityValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("Name is required!"),
    body("religion")
      .trim()
      .notEmpty()
      .withMessage("religion id is required!")
      .exists()
      .withMessage("Religion must exist in the request"),
  ];
};

const updateCommunityValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Community id is required!")
      .exists()
      .withMessage("Community id must exist in the request"),
    body("name").trim().notEmpty().withMessage("Name is required!"),
    body("religion")
      .trim()
      .notEmpty()
      .withMessage("religion id is required!")
      .exists()
      .withMessage("Religion must exist in the request body"),
  ];
};

const deleteCommunityValidator = () => {
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
  addCommunityValidator,
  updateCommunityValidator,
  deleteCommunityValidator,
};
