import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Person from "./Person.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log(err);
  });

app.get(`/`, async (req, res) => {
  const { page } = req.query;
  const pageSize = 5;
  //   try {
  //     const people = await Person.find()
  //       .sort({ age: -1, name: 1 })
  //       .limit(2)  // kiek parodys rezultatu
  //       .skip(2); // praleidimas varinatu. rodys nuo 3io
  //     res.json(people);
  //   } catch (error) {
  //     console.log({ error: error.message });
  //   }

  //   const people = await Person.find({
  //     $or: [{ age: 25 }, { name: "Vytautas" }], // randa visus kur vardas Vytautas arba amzius 25
  //   });
  //   res.json(people);

  //   const people = await Person.find({
  //     age: { $ne: 25 }, // randa tuos kuriu amzius nera 25
  //   });
  //   res.json(people);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
