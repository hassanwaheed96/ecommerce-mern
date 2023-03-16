import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// ROUTES
// create products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get products
router.get("/get-products", getProductController);

// get single products
router.get("/single-product/:slug", getSingleProductController);

// update product
router.put(
  "/update-product",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// delete product
router.put(
  "/delete-product",
  requireSignIn,
  isAdmin,
  formidable(),
  deleteProductController
);

export default router;
