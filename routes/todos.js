import express from "express";
import {
  getTodo,
  createTodo,
  updateTodo,
  deletTodo,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deletTodo);

export default router;
