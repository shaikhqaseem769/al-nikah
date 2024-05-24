import { Router } from "express";

import {
  addSubCommunityValidator,
  updateSubCommunityValidator,
  deleteSubCommunityValidator,
} from "../../validators/adminauth/subCommunity.validators.js";

import { validate } from "../../validators/validate.js";

import {
  addSubCommunity,
  listComminutySubCommunity,
  listSubCommunity,
  updateSubCommunity,
  deleteSubCommunity,
} from "../../controllers/admin/subCommunity.controllers.js";
import { verifyJWT } from "../../middlewares/adminauth.middlewares.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/")
  .post(addSubCommunityValidator(), validate, addSubCommunity)
  .get(listSubCommunity);
router.route("/:community_id").get(listComminutySubCommunity);

router
  .route("/:id")
  .put(updateSubCommunityValidator(), validate, updateSubCommunity)
  .delete(deleteSubCommunityValidator(), validate, deleteSubCommunity);

export default router;
