import { body, param } from "express-validator";

const addNewLanguageValidator = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .isLength({ max: 50 })
      .withMessage("Language name should be less than 50 characters"),
  ];
};

const updateLanguageValidator = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .isLength({ max: 50 })
      .withMessage("Language name should be less than 50 characters"),
    param("id")
      .trim()
      .isLength({ min: 24, max: 24 })
      .withMessage("Invalid Id")
      .notEmpty()
      .withMessage("Please add valid id"),
  ];
};

const deleteLanguageValidator = () => {
  return [
    param("id")
      .trim()
      .isLength({ min: 24, max: 24 })
      .withMessage("Invalid Id")
      .notEmpty()
      .withMessage("Please add valid id"),
  ];
};
export {
  addNewLanguageValidator,
  updateLanguageValidator,
  deleteLanguageValidator,
};
