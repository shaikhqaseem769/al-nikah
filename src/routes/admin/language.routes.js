import { Router } from "express";
import {
  addNewLanguage,
  updateLanguage,
  deleteLanguage,
  listAllLanguage,
} from "../../controllers/admin/language.controllers.js";
import { validate } from "../../validators/validate.js";
import {
  addNewLanguageValidator,
  updateLanguageValidator,
  deleteLanguageValidator,
} from "../../validators/adminauth/language.validators.js";
import { verifyJWT } from "../../middlewares/adminauth.middlewares.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/")
  .post(addNewLanguageValidator(), validate, addNewLanguage)
  .get(listAllLanguage);

router.route("/:id").put(updateLanguageValidator(), validate, updateLanguage);
router
  .route("/:id")
  .delete(deleteLanguageValidator(), validate, deleteLanguage);
export default router;
