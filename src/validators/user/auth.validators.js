import { body, param } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("first_name").trim().notEmpty().withMessage("First name is required"),
    body("last_name").trim().notEmpty().withMessage("Last name is required"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("country_code")
      .trim()
      .isLength({ max: 3, min: 5 })
      .withMessage("Country code is required"),
    body("phone_number")
      .trim()
      .isLength({ max: 10, min: 10 })
      .withMessage("Invalid phone number")
      .notEmpty()
      .withMessage("phone is required"),

    body("password").trim().notEmpty().withMessage("Password is required"),
  ];
};

const userLoginValidation = () => {
  return [
    body("email").optional().isEmail().withMessage("Invalid email"),
    body("phone_number")
      .optional()
      .isLength({ max: 10, min: 10 })
      .withMessage("Invalid phone number"),
    body("password").notEmpty().withMessage("Passowrd is required"),
  ];
};

export { userRegisterValidator, userLoginValidation };
