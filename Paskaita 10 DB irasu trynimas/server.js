import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes.js";
import { logger } from "./midleware/index.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
