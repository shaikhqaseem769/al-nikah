import { body, param } from "express-validator";

const addFamilyDetailsValidator = () => {
  return [
    body("family_status")
      .trim()
      .notEmpty()
      .withMessage("Family status is required"),
    body("family_type")
      .trim()
      .notEmpty()
      .withMessage("Family type is required"),

    body("family_values")
      .trim()
      .notEmpty()
      .withMessage("Family values is required"),
    body("living_with_parents")
      .trim()
      .notEmpty()
      .withMessage("Living with parents is required"),
    body("family_income")
      .trim()
      .notEmpty()
      .withMessage("Family income is required"),

    body("father_occupation")
      .trim()
      .notEmpty()
      .withMessage("Father occupation is required!"),
    body("mother_occupation")
      .trim()
      .notEmpty()
      .withMessage("Mother occupation is required!"),
    body("no_of_brothers")
      .trim()
      .notEmpty()
      .withMessage("No of brothers is required!"),
    body("no_of_married_brothers")
      .trim()
      .notEmpty()
      .withMessage("No of married brothers is required!"),
    body("no_of_sisters")
      .trim()
      .notEmpty()
      .withMessage("No of sisters brothers is required!"),
    body("no_of_married_sisters")
      .trim()
      .notEmpty()
      .withMessage("No of sisters brothers is required!"),
    body("family_based_out_of")
      .trim()
      .notEmpty()
      .withMessage("Family based out of is required!"),
    body("about_my_family")
      .trim()
      .notEmpty()
      .withMessage("About my family is required!")
      .isLength({ min: 100, max: 4999 })
      .withMessage("About my family must be between 100 and 5000 characters"),
  ];
};

const addContactDetailsValidator = () => {
  return [
    body("email_id")
      .trim()
      .notEmpty()
      .withMessage("Email id is required!")
      .isEmail()
      .withMessage("Email is invalid"),
    body("alternet_email_id")
      .optional()
      .trim()

      .isEmail()
      .withMessage("Email is invalid"),
    body("country_code")
      .trim()
      .notEmpty()
      .withMessage("Country Code is required!"),
    body("phone_number")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required!")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be exactly 10 characters long"),
    body("phone_number_owned_by").optional().trim(),
    body("alernate_country_code")
      .optional()
      .trim()

      .isLength({ min: 3, max: 5 })
      .withMessage("Country Code must between 3 to 5 characters long"),
    body("alernate_phone_number")
      .optional()
      .trim()
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be exactly 10 characters long"),
  ];
};

const addreligiosBeliefsValidator = () => {
  return [
    body("namaz").trim().notEmpty().withMessage("Namz id is required!"),

    body("zakat").trim().notEmpty().withMessage("Zakat is required!"),
    body("when_do_you_practice_fasting")
      .trim()
      .notEmpty()
      .withMessage("When do you practice fasting is required!"),
    body("umarah_hajj")
      .trim()
      .notEmpty()
      .withMessage("Umarah hajj is required!"),

    body("how_do_you_often_read_the_quran")
      .trim()
      .notEmpty()
      .withMessage("How do you often read the Quran is required!"),
    body("sunnah_beard")
      .trim()
      .notEmpty()
      .withMessage("Sunnah beard is required!"),
    body("sunnah_cap").trim().notEmpty().withMessage("Sunnah cap is required!"),
    body("can_the_girl_work_after_marriage")
      .trim()
      .notEmpty()
      .withMessage("Can the girl work after marriage is required!"),
  ];
};

const addLifestyleInterestsValidator = () => {
  return [
    body("dietary_habits")
      .trim()
      .notEmpty()
      .withMessage("Dietary habits id is required!"),

    body("drinking_habits")
      .trim()
      .notEmpty()
      .withMessage("Drinking habits is required!"),
    body("smoking_habits")
      .trim()
      .notEmpty()
      .withMessage("Smoking habits is required!"),
    body("assets").trim().notEmpty().withMessage("Assets is required!"),

    body("hobbies").trim().notEmpty().withMessage("Hobbies is required!"),
    body("interests").trim().notEmpty().withMessage("Interests is required!"),
    body("languages_i_speak")
      .trim()
      .notEmpty()
      .withMessage("Languages i speak is required!"),
    body("food_i_cook")
      .trim()
      .notEmpty()
      .withMessage("Food i cook is required!"),
    body("cuisine").trim().notEmpty().withMessage("Cuisine is required!"),
    body("favourite_music")
      .trim()
      .notEmpty()
      .withMessage("Favourite music is required!"),
    body("dress_style")
      .trim()
      .notEmpty()
      .withMessage("Dress style is required!"),
    body("sports").trim().notEmpty().withMessage("Sports is required!"),
    body("favourite_read")
      .trim()
      .notEmpty()
      .withMessage("favourite read is required!"),
    body("favourite_books")
      .trim()
      .notEmpty()
      .withMessage("favourite books is required!"),
    body("movies").trim().notEmpty().withMessage("movies is required!"),
    body("tv_shows").trim().notEmpty().withMessage("TV shows is required!"),
    body("vacation_destination")
      .trim()
      .notEmpty()
      .withMessage("Vacation destination is required!"),
  ];
};

export {
  addFamilyDetailsValidator,
  addContactDetailsValidator,
  addreligiosBeliefsValidator,
  addLifestyleInterestsValidator,
};
