import express from "express";
import { getData, getData2 } from "./controler.js";

const router = express.Router();

router.get("/", getData2);

export default router;
