import express from "express";
import { test, getPerson, getPersonFromGroup } from "./contolers.js";

const router = express.Router();

router.get(`/people/:id`, getPerson);
router.get("/groups/:groupId/people/:personId", getPersonFromGroup);

router.get(`/`, test);
export default router;
