import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// Routes beginning with /api/auth
router.post("/signup", signup);
router.post("/login", login);

export default router;
