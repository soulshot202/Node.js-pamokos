import express from "express";
import {
  addPet,
  getPetByType,
  getPets,
  getPetsByAge,
  getPetsByAge2,
} from "./controler.js";

const router = express.Router();

router.get("/", getPets);
router.get("/pets/:type", getPetByType);
router.get("/pets/byoldest/asc", getPetsByAge);
router.get("/pets/byoldest/dsc", getPetsByAge2);
//router.get("/pets/byoldest/-1", getPetsByAge);

router.post(`/`, addPet);

export default router;
