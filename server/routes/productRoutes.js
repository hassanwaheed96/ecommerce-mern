import express from "express";
import { createProductController } from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

// ROUTES
// create products
router.post("/create-product", requireSignIn, isAdmin, createProductController);

export default router;
