// const express = require("express");
// const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");
// const {
//   createCategoryController,
//   updateCategoryController,
//   getCategoryController,
//   getSingleCategoryController,
//   deleteCategoryController,
// } = require("../controllers/categoryController");

import express from "express";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getCategoryController,
  getSingleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

// router object
const router = express.Router();

// ROUTES
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get category
router.get("/get-category", getCategoryController);

// get one category
router.get("/get-single-category/:slug", getSingleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
