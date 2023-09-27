import express from "express";
import { deleteById, deleteByName } from "./controlers.js";

const router = express.Router();

router.delete("/person/:id", deleteById);
router.delete(`/people/:name`, deleteByName);

export default router;
