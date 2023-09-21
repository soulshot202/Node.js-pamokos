import express from "express";
import mongoose from "mongoose";
import { createData, getData } from "./controler.js";
import mongodb from "mongodb";

const router = express.Router();

router.get("/", getData);
router.post("/", createData);

export default router;
