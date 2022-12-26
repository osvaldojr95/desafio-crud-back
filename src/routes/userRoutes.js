import express from "express";
import {
  signUpValidate,
  signInValidate,
} from ".././middlewares/userValidations.js";
import { tokenValidadion } from "../middlewares/tokenValidations.js";
import { signUp, signIn, signOut } from ".././controllers/userController.js";

const router = express.Router();
router.post("/sign-up", signUpValidate, signUp);
router.post("/sign-in", signInValidate, signIn);
router.post("/sign-out", tokenValidadion, signOut);

export default router;
