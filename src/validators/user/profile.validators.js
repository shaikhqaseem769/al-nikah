import { body, param } from "express-validator";

const addBasicDetailsValidator = () => {
  return [
    body("first_name")
      .trim()
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ max: 49 })
      .withMessage("First name should be less than 50 charcters"),
    body("last_name")
      .trim()
      .notEmpty()
      .withMessage("Last name is required")
      .isLength({ max: 49 })
      .withMessage("Last name should be less than 50 charcters"),
    body("gender").trim().notEmpty().withMessage("Gender is required"),
    body("dob")
      .trim()
      .notEmpty()
      .withMessage("Date of birth is required")
      .toDate() // Convert input to a Date object
      //   .isDate({ format: "YYYY-MM-DD" }) // Corrected format
      .withMessage("Date of birth must be in the format YYYY-MM-DD"),
    body("marital_status")
      .trim()
      .notEmpty()
      .withMessage("Marital status is required"),
    body("religion").trim().notEmpty().withMessage("Religion is required!"),
    body("mother_tongue")
      .trim()
      .notEmpty()
      .withMessage("Mother Tongue is required!"),
    body("current_location")
      .trim()
      .notEmpty()
      .withMessage("Current Location is required!"),
    body("annual_income")
      .trim()
      .notEmpty()
      .withMessage("Annual income is required!"),
  ];
};

export { addBasicDetailsValidator };
