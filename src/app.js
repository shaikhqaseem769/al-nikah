import cookieParser from "cookie-parser";
import express from "express";
import { createServer } from "http";
import { errorHandler } from "./middlewares/error.middlewares.js";
// import KafkaConfig from "./config.js";
// /opt/homebrew/opt/kafka/bin/zookeeper-server-start /opt/homebrew/etc/kafka/zookeeper.properties
// /opt/homebrew/opt/kafka/bin/kafka-server-start /opt/homebrew/etc/kafka/server.properties
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // configure static file to save images locally
app.use(cookieParser());

const httpServer = createServer(app);

// const kafkaConfig = new KafkaConfig();
// kafkaConfig.consume("my-topic", (data) => {
//   console.log(`Kafka is calling:- `, data);
// });

// (async () => {
//   try {
//     // Wait for the Kafka producer to connect
//     await kafkaConfig.connectProducer(); // This should work now
//     console.log("Kafka Producer connected successfully.");
//   } catch (error) {
//     console.error("Error connecting Kafka Producer:", error);
//   }
// })();

// import admin routes
import adminAuthUserRouter from "./routes/admin/adminauth.routes.js";
import languageRouter from "./routes/admin/language.routes.js";
import religionRouter from "./routes/admin/religion.routes.js";
import communityRouter from "./routes/admin/community.routes.js";
import subCommunityRouter from "./routes/admin/subCommunity.routes.js";
import educationCategoryRouter from "./routes/admin/educationCategory.routes.js";
import educationRouter from "./routes/admin/education.routes.js";

// import user Routes
import userAuthRoute from "./routes/user/userauth.routes.js";
import userProfileRoute from "./routes/user/profile.routes.js";
import userFamilyRoute from "./routes/user/familydetail.routes.js";

// import kafka Routes
// import kafkaMessagesRoute from "./routes/user/kafka.routes.js";
import workerRoute from "./routes/advanced/worker.routes.js";
// Admin routes use api routes
app.use("/api/v1/admin", adminAuthUserRouter);

app.use("/api/v1/admin/languages", languageRouter);
app.use("/api/v1/admin/religions", religionRouter);
app.use("/api/v1/admin/communities", communityRouter);
app.use("/api/v1/admin/sub-communities", subCommunityRouter);
app.use("/api/v1/admin/education-category", educationCategoryRouter);
app.use("/api/v1/admin/education", educationRouter);

// User Routes

app.use("/api/v1/users", userAuthRoute);
app.use("/api/v1/users", userProfileRoute);
app.use("/api/v1/users", userFamilyRoute);

// app.use("/api/v1/kafka", kafkaMessagesRoute);
app.use("/api/v1/worker-thread", workerRoute);

app.use(errorHandler);

app.use((req, res, next) => {
  res.status(404).send("Sorry, this page does not exist.");
});

export { httpServer };
