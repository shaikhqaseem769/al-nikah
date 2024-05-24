import { Router } from "express";

import {
  addCommunityValidator,
  updateCommunityValidator,
  deleteCommunityValidator,
} from "../../validators/adminauth/community.validators.js";

import { validate } from "../../validators/validate.js";

import {
  addCommunity,
  listReligionCommunity,
  listCommunity,
  updateCommunity,
  deleteCommunity,
} from "../../controllers/admin/community.controllers.js";
import { verifyJWT } from "../../middlewares/adminauth.middlewares.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/")
  .post(addCommunityValidator(), validate, addCommunity)
  .get(listCommunity);

router.route("/:religion_id").get(listReligionCommunity);

router
  .route("/:id")
  .put(updateCommunityValidator(), validate, updateCommunity)
  .delete(deleteCommunityValidator(), validate, deleteCommunity);

export default router;
