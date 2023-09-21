import express from "express";
import { addNewCar } from "./controler.js";

const router = express.Router();

router.post(`/`, addNewCar);

export default router;
