import { Router } from "express";
import {
  userRegister,
  userLogin,
  addGallery,
  deleteGalleryImage,
} from "../../controllers/user/userauth.controllers.js";

import { verifyJWT } from "../../middlewares/userauth.middlewares.js";
import { upload } from "../../middlewares/multer.middlewares.js";

const router = Router();

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);

router.use(verifyJWT);
router.route("/gallery-images").post(upload.single("filename"), addGallery);
router.route("/gallery-images/:id").delete(deleteGalleryImage);

export default router;
