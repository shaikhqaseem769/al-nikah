import { Route, Router } from "express";
import { validate } from "../../validators/validate.js";
import {
  addEducationCategoryValidator,
  deleteEducationCategoryValidator,
  updateEducationCategoryValidator,
} from "../../validators/adminauth/educationCategory.validators.js";
import {
  addEducationCategory,
  listEducationCategory,
  updateEducationCategory,
  deleteEducationCategory,
} from "../../controllers/admin/educationCategory.controllers.js";
import { verifyJWT } from "../../middlewares/adminauth.middlewares.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/")
  .post(addEducationCategoryValidator(), validate, addEducationCategory)
  .get(listEducationCategory);

router
  .route("/:id")
  .put(updateEducationCategoryValidator(), validate, updateEducationCategory)
  .delete(
    deleteEducationCategoryValidator(),
    validate,
    deleteEducationCategory
  );
export default router;
