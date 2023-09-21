import dotenv from "dotenv";
import mongoose from "mongoose";
import mongodb from "mongodb";
import Car from "./models/Car.js";
import People from "./models/People.js";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const { MongoClient } = mongodb;
const client = new MongoClient(MONGO_URL);

export async function getData(req, res) {
  try {
    const con = await client.connect(MONGO_URL);
    const data = await con.db("test").collection("cars").find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getData2(req, res) {
  const cars = await Car.find({}, { _id: 0, __v: 0 });
  res.json(cars);
}
