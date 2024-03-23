import { Router } from "express";
import {
  adminUserRegister,
  adminLoginUser,
} from "../../controllers/admin/adminauth.controllers.js";

import {
  userRegisterValidator,
  userLoginValidation,
} from "../../validators/adminauth/adminauth.validators.js";
import { validate } from "../../validators/validate.js";
const router = Router();

router
  .route("/register")
  .post(userRegisterValidator(), validate, adminUserRegister);
router.route("/login").post(userLoginValidation(), validate, adminLoginUser);

export default router;
