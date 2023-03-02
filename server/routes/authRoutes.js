const express = require("express");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

// router object
const router = express.Router();

// register user routing
router.post("/register", registerController);

// login user routing
router.post("/login", loginController);

// testing
router.get("/test", requireSignIn, isAdmin, testController);

module.exports = router;
