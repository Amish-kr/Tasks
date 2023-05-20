import express from "express";
import {
  resetPassword,
  home_controller,
} from "../controllers/home_controller.js";
import { userRegistration, userLogin } from "../controllers/user_controller.js";

const router = express.Router();

console.log("router loaded");

router.get("/", home_controller);
router.get("/reset-password", resetPassword);
router.post("/signup", userRegistration);

router.post("/login", userLogin);

export default router;
