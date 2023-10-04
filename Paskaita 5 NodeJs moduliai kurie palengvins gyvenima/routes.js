import express from "express";
import { test } from "./controlers.js";

const router = express.Router();

router.get(`/`, test);

export default router;
