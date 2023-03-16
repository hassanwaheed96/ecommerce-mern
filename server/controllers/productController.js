import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";
import mongoose from "mongoose";

// create product
export const createProductController = async (req, res) => {
  try {
    const { name, slug, category, price, quantity, description, shipping } =
      req.fields;
    const { photo } = req.files;

    if (!name) res.status(500).send({ message: "Name required" });
    if (!category) res.status(500).send({ message: "category required" });
    if (!price) res.status(500).send({ message: "price required" });
    if (!quantity) res.status(500).send({ message: "quantity required" });
    if (!description) res.status(500).send({ message: "description required" });
    if (!photo) res.status(500).send({ message: "photo required" });

    const newProduct = new productModel({
      name,
      category,
      price,
      quantity,
      description,
      slug: slugify(name),
    });

    if (photo) {
      newProduct.photo.data = fs.readFileSync(photo.path);
      newProduct.photo.contentType = photo.type;
    }
    await newProduct.save();

    res.status(200).send({
      success: true,
      message: "Product added successfully",
      newProduct,
    });
  } catch (error) {
    console.log("Error", error);
    res
      .status(500)
      .send({ success: false, message: "Create product failed", error });
  }
};

// get product
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      message: "Products shown successfully",
      totalProducts: products.length,
      products,
    });
  } catch (error) {
    console.log("Error: ", error);
    res
      .status(500)
      .send({ success: false, message: "Get Product failed", error });
  }
};

// get single product
export const getSingleProductController = async (req, res) => {
  try {
    // const { id } = req.params;
    // const objId = mongoose.Types.ObjectId(id);
    const { slug } = req.params;
    const product = await productModel
      .findOne({ slug })
      .select("-photo")
      .populate("category");

    res.status(200).send({
      success: true,
      message: "Single product found successfully",
      product,
    });
  } catch (error) {
    console.log("Error: ", error);
    res
      .status(500)
      .send({ success: false, message: "Get single Product failed", error });
  }
};

// update product
export const updateProductController = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error: ", error);
    res
      .status(500)
      .send({ success: false, message: "Update Product failed", error });
  }
};

// delete product
export const deleteProductController = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error: ", error);
    res
      .status(500)
      .send({ success: false, message: "Delete Product failed", error });
  }
};
