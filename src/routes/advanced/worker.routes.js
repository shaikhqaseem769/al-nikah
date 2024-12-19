import { Router } from "express";
const router = Router();
import {
  createSingleWorker,
  createMultipleWorker,
  heavyComputation,
} from "./../../controllers/advanced/worker.controllers.js";

router.route("/single-worker").get(createSingleWorker);
router.route("/multi-worker").get(createMultipleWorker);
router.route("/heavy-computation").get(heavyComputation);

export default router;
