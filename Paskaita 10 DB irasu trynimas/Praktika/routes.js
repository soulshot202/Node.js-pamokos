import express from "express";
import {
  addComments,
  addUser,
  deleteCommentsById,
  getAllComments,
  getAllUsers,
} from "./controlers.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/comments", getAllComments);
router.post("/comments", addComments);
router.post("/users", addUser);
router.delete("/comments/:id", deleteCommentsById);

export default router;
