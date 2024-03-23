import dotenv from "dotenv";
import { httpServer } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

const startServer = () => {
  connectDB();
  httpServer.listen(PORT, () => {
    console.info(
      `Server is running on ${PORT} and ${process.env.NODE_ENV} mode!`
    );
  });
};

startServer();
