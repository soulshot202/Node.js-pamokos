import express from "express";
import { createItem, deleteItem, getAllItems } from "./controler.js";

const router = express.Router();
router.get("/items", getAllItems);
router.post("/items", createItem);
router.delete("/items/:id", deleteItem);
router.delete("/items", (req, res) => {
  res.json({
    message: "Wrong querry",
  });
});
router.delete("/*", (req, res) => {
  res.json({
    message: "Querry not found",
  });
});
router.get("/*", (req, res) => {
  res.json({
    message: "Page not found",
  });
});

export default router;
