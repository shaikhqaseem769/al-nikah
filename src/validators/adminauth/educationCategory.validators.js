import { body, param } from "express-validator";

const addEducationCategoryValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("Education type is required!"),
  ];
};

const updateEducationCategoryValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Education category is required!"),
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Education category is required!"),
  ];
};

const deleteEducationCategoryValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Education category is required!"),
  ];
};
export {
  addEducationCategoryValidator,
  updateEducationCategoryValidator,
  deleteEducationCategoryValidator,
};
