import { Route, Router } from "express";
import { validate } from "../../validators/validate.js";
import {
  addEducationValidator,
  deleteEducationValidator,
  updateEducationValidator,
} from "../../validators/adminauth/education.validators.js";
import {
  addEducation,
  listEducation,
  updateEducation,
  deleteEducation,
} from "../../controllers/admin/education.controllers.js";
import { verifyJWT } from "../../middlewares/adminauth.middlewares.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/")
  .post(addEducationValidator(), validate, addEducation)
  .get(listEducation);

router
  .route("/:id")
  .put(updateEducationValidator(), validate, updateEducation)
  .delete(deleteEducationValidator(), validate, deleteEducation);
export default router;
