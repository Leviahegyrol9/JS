import express from "express";
import {
  getAllUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", saveUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

export default router;
