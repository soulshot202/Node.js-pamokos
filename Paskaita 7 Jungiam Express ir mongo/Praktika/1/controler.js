import mongoose from "mongoose";
import dotenv from "dotenv";
import mongodb from "mongodb";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
const { MongoClient } = mongodb;

const client = new MongoClient(MONGO_URL);

export async function getData(req, res) {
  try {
    const con = await client.connect();
    const data = await con.db("test").collection("people").find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function createData(req, res) {
  try {
    const con = await client.connect();
    const data = await con.db("test").collection("people").insertOne(req.body);
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
}
