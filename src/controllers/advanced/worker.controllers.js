import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { Worker } from "worker_threads";
import { THREAD_COUNT } from "../../constants.js";

const createSingleWorker = asyncHandler((req, res) => {
  const worker = new Worker("./src/single-worker.js");

  worker.on("message", (data) => {
    res
      .status(200)
      .json(new ApiResponse(200, data, "Single Worker Created Successfully"));
  });

  worker.on("error", (err) => {
    res.status(500).json(new ApiError(500, "Some thing went worng!", err));
  });
});

const createWorker = () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/multi-worker.js", {
      workerData: { thread_count: THREAD_COUNT },
    });

    worker.on("message", (data) => {
      resolve(data);
    });

    worker.on("error", (err) => {
      reject(err);
    });
  });
};

const createMultipleWorker = asyncHandler(async (req, res) => {
  const promises = [];

  for (let i = 0; i < THREAD_COUNT; i++) {
    promises.push(createWorker());
  }

  let workers = await Promise.all(promises);
  let total = workers.reduce((acc, curr) => acc + curr, 0);
  res
    .status(200)
    .json(new ApiResponse(200, total, "Multiple Worker Created Successfully"));
});

const heavyComputation = asyncHandler(async (req, res) => {
  let counter = 0;
  for (let i = 0; i < 2000000000 / workerData.thread_count; i++) {
    counter++;
  }
  res
    .status(200)
    .json(new ApiResponse(200, total, "Multiple Worker Created Successfully"));
});

export { createSingleWorker, createMultipleWorker, heavyComputation };
