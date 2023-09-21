import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes.js";

const app = express();
app.use(express.json());

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
