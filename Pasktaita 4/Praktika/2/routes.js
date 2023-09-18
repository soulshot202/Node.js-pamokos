import {
  getData,
  getEmails,
  getMake,
  getUserById,
  getWomans,
} from "./controlers.js";

import express from "express";

const router = express.Router();

router.get(`/`, getData);
router.get(`/cars/:make`, getMake);
router.get(`/user/:id`, getUserById);
router.get(`/emails`, getEmails);
router.get(`/womans`, getWomans);

export default router;
