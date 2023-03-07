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

// protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
