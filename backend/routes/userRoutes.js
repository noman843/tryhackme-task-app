import express from "express";
import { getUser } from "../controllers/userController.js";
import { verifyAccessToken } from "../middlewares/index.js";

const router = express.Router();

// Routes beginning with /api/user
router.get("/", verifyAccessToken, getUser);

export default router;
