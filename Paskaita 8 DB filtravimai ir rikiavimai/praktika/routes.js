import express from "express";
import { addPet, getPetByType, getPets, getPetsByAge } from "./controler.js";

const router = express.Router();

router.get("/", getPets);
router.get("/pets/:type", getPetByType);
router.get("/pets/byoldest/:par", getPetsByAge);
//router.get("/pets/byoldest/-1", getPetsByAge);

router.post(`/`, addPet);

export default router;
