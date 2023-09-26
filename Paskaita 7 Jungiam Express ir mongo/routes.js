import express from "express";
import {
  createCar,
  deleteCarById,
  getCarById,
  getCars,
  updateCar,
} from "./controler.js";

const router = express.Router();

router.post(`/cars`, createCar);

router.get("/cars", getCars);

router.get(`/cars/:id`, getCarById);

router.put(`/cars/:id`, updateCar);

router.delete(`/cars/:id`, deleteCarById);

export default router;
