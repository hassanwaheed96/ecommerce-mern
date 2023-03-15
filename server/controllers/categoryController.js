// const categoryModel = require("../models/categoryModel");
// const slugify = require("slugify");
// var mongoose = require("mongoose");

import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
import mongoose from "mongoose";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) res.status(401).send({ message: "Name is required" });

    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res
        .status(200)
        .send({ success: true, message: "Category already exists" });
    }

    const newCategory = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();

    res
      .status(201)
      .send({ success: true, message: "New Category added", newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in category",
      error,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const { id } = req.params;
    console.log("What is id? ", id);
    const objId = mongoose.Types.ObjectId(id);

    const findCategory = await categoryModel.findOne(objId);
    console.log("FInd cate : ", findCategory);

    findCategory.name = name;
    findCategory.slug = slugify(name);

    const updatedCategory = await findCategory.save();
    console.log("Updated Category: ", updatedCategory);

    res.status(200).send({
      success: true,
      message: "Category successfully updated",
      updatedCategory,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, messgae: "Error while updating", error });
  }
};

export const getCategoryController = async (req, res) => {
  try {
    const allCategories = await categoryModel.find({});
    console.log("category : ", allCategories);
    res
      .status(200)
      .send({ success: true, message: "Categories list", allCategories });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Cannot get categories", error });
  }
};

export const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    // const objId = mongoose.Types.ObjectId(id);

    const singleCategory = await categoryModel.findOne(slug);
    console.log("Single Category: ", singleCategory);

    res.status(200).send({
      success: true,
      message: "Getting Single category successfully",
      singleCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Getting Single category failed",
      error,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Delete Category Failed", error });
  }
};
