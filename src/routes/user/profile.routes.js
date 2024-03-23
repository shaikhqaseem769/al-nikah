import { Router } from "express";
import {
  addBasicDetails,
  listBasicDeatils,
  aboutMe,
  listAboutMe,
  addEducationDetails,
  getEducationDetails,
  addCareerDetails,
  getCareerDetails,
} from "../../controllers/user/profile.controllers.js";
import { verifyJWT } from "../../middlewares/userauth.middlewares.js";
import { validate } from "../../validators/validate.js";
import { addBasicDetailsValidator } from "../../validators/user/profile.validators.js";
import {
  aboutMeValidator,
  addEducationDetailsValidator,
  addCareerDetailsValidator,
} from "../../validators/user/aboutme.validators.js";
const router = Router();
router.use(verifyJWT);
router
  .route("/basic-details")
  .post(addBasicDetailsValidator(), validate, addBasicDetails)
  .get(listBasicDeatils);
router
  .route("/about-me")
  .post(aboutMeValidator(), validate, aboutMe)
  .get(listAboutMe);
router
  .route("/education-details")
  .post(addEducationDetailsValidator(), validate, addEducationDetails)
  .get(getEducationDetails);
router
  .route("/career-details")
  .post(addCareerDetailsValidator(), validate, addCareerDetails)
  .get(getCareerDetails);

export default router;
