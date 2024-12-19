import express from "express";
import {
  nonBlockingRequest,
  blockingRequest,
  blockingMultiWorkerRequest,
  eventEmitterUseCase,
  eventListnerUseCase,
} from "../../controllers/user/multiThreading.controllers.js";
const router = express.Router();

router.route("/non-blocking-request").get(nonBlockingRequest);
router.route("/blocking-request").get(blockingRequest);
router.route("/multi-blocking-request").get(blockingMultiWorkerRequest);
router.route("/evnet-emit").get(eventEmitterUseCase);
router.route("/evnet-listen").get(eventListnerUseCase);

export default router;
