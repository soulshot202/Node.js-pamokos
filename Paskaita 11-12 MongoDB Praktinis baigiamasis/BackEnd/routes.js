import express from "express";
import {
  addService,
  addUser,
  deleteServiceById,
  getAllUsers,
  getServices,
} from "./controlers.js";

const router = express.Router();

router.get(`/memberships`, getServices);
router.post(`/memberships`, addService);
router.delete(`/memberships/:id`, deleteServiceById);
router.get(`/users/:order`, getAllUsers);
router.post(`/users`, addUser);

export default router;
