import express from "express";
import { deleteById, deleteByName } from "./controlers.js";
import { validateId } from "./midleware/index.js";

const router = express.Router();

router.delete("/person/:id", validateId, deleteById);
router.delete(`/people/:name`, deleteByName);

export default router;
