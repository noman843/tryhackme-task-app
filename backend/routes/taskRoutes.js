import express from "express";

import { getTasks, getTask, postTask, putTask, deleteTask } from "../controllers/taskController.js";
import { verifyAccessToken } from "../middlewares/index.js";

const router = express.Router();

// Routes beginning with /api/tasks
router.get("/", getTasks);
router.get("/:taskId", getTask);
router.post("/", postTask);
router.put("/:taskId", putTask);
router.delete("/:taskId", deleteTask);

// router.get("/", verifyAccessToken, getTasks);
// router.get("/:taskId", verifyAccessToken, getTask);
// router.post("/", verifyAccessToken, postTask);
// router.put("/:taskId", verifyAccessToken, putTask);
// router.delete("/:taskId", verifyAccessToken, deleteTask);

export default router;