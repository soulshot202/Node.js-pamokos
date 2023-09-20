import express from "express";
import { addNewPerson } from "./controler.js";

const router = express.Router();

router.post(`/`, addNewPerson);

export default router;
