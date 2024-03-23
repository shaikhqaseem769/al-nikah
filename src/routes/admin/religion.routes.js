import { Router } from "express";
import { validate } from "../../validators/validate.js";
import {
  addReligionValidator,
  updateReligionValidator,
  deleteReligionValidator,
} from "../../validators/adminauth/religion.validators.js";
import {
  addReligion,
  updateReligion,
  listReligion,
  deleteRelegion,
} from "../../controllers/admin/religion.controllers.js";
import { verifyJWT } from "../../middlewares/adminauth.middlewares.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/")
  .post(addReligionValidator(), validate, addReligion)
  .get(listReligion);
router
  .route("/:id")
  .put(updateReligionValidator(), validate, updateReligion)
  .delete(deleteReligionValidator(), validate, deleteRelegion);

export default router;
