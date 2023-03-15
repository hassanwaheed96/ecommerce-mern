// const express = require("express");
// const {
// registerController,
// loginController,
// testController,
// forgotPasswordController,
// } = require("../controllers/authController");
// const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");
import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

// router object
const router = express.Router();

// register user routing
router.post("/register", registerController);

// login user routing
router.post("/login", loginController);

// forgot password routing
router.post("/forgot-password", forgotPasswordController);

// testing
router.get("/test", requireSignIn, isAdmin, testController);

// protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
export default router;
