import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
