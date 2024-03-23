import { body, param } from "express-validator";

const addEducationValidator = () => {
  return [
    body("education")
      .trim()
      .notEmpty()
      .withMessage("Education Category is required!"),
    body("name").trim().notEmpty().withMessage("Education is required!"),
  ];
};

const updateEducationValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Education category is required!"),
    body("education")
      .trim()
      .notEmpty()
      .withMessage("Education Category is required!"),

    body("name")
      .trim()
      .notEmpty()
      .withMessage("Education category is required!"),
  ];
};

const deleteEducationValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty()
      .withMessage("Education category is required!"),
  ];
};
export {
  addEducationValidator,
  updateEducationValidator,
  deleteEducationValidator,
};
