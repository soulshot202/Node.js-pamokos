import express from "express";
import { addData, getData, getData2 } from "./controler.js";

const router = express.Router();

router.get("/", getData2);
router.post("/", addData);

export default router;
