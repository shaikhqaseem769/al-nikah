import { Router } from "express";
import {
  sendMessageTofka,
  sendUserPost,
  getCommentsForPost,
} from "../../controllers/user/kafka.controller.js";

const router = Router();

router.route("/message-via-kafka").post(sendMessageTofka);

router.route("/send-user-post").post(sendUserPost);
router.route("/get-user-comment").post(getCommentsForPost);

export default router;
