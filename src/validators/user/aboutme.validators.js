import { body, param } from "express-validator";

const aboutMeValidator = () => {
  return [
    body("about_me")
      .trim()
      .notEmpty()
      .withMessage("About me is required")
      .isLength({ min: 100, max: 4999 })
      .withMessage("About me must be between 100 and 5000 characters"),
    body("created_for").trim().notEmpty().withMessage("Managed by is required"),

    body("disability").trim().notEmpty().withMessage("Disability is required"),
    body("thalassemia")
      .trim()
      .notEmpty()
      .withMessage("Thalassemia is required"),

    body("hiv").trim().notEmpty().withMessage("Hiv is required"),
  ];
};

const addEducationDetailsValidator = () => {
  return [
    body("highest_education")
      .trim()
      .notEmpty()
      .withMessage("Highest education is required"),
    body("ug_degree").trim().notEmpty().withMessage("UG degree is required"),
    body("ug_college").trim().notEmpty().withMessage("UG college is required"),
    body("school_name")
      .trim()
      .notEmpty()
      .withMessage("School name is required"),
    body("about_my_education")
      .trim()
      .notEmpty()
      .withMessage("About my education is required")
      .isLength({ min: 100, max: 4999 })
      .withMessage(
        "About my education must be between 100 and 5000 characters"
      ),
  ];
};

const addCareerDetailsValidator = () => {
  return [
    body("employed_in")
      .trim()
      .notEmpty()
      .withMessage("Employed in is required!"),
    body("occupation")
      .trim()
      .notEmpty()
      .withMessage("Occupation in is required!"),
    body("organisation_name")
      .trim()
      .notEmpty()
      .withMessage("Organisation is required!"),
    body("interested_in_settling_abroad")
      .trim()
      .notEmpty()
      .withMessage("Interested in settling abroad is required!"),
    body("about_my_career")
      .trim()
      .notEmpty()
      .withMessage("About my career is required!"),
  ];
};
export {
  aboutMeValidator,
  addEducationDetailsValidator,
  addCareerDetailsValidator,
};
