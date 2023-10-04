import express from "express";
import {
  createPhone,
  deletePhoneById,
  getAllPhones,
  getPhoneById,
  updatePhoneById,
} from "./controlers.js";

const router = express.Router();

router.post(`/phone`, createPhone);
router.get(`/phone`, getAllPhones);
router.get(`/phone/:id`, getPhoneById);
router.put(`/phone/:id`, updatePhoneById);
router.delete(`/phone/:id`, deletePhoneById);

export default router;
