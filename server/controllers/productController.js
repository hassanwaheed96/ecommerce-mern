import productModel from "../models/productModel.js";

export const createProductController = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    if (!name) res.status(401).send({ message: "Name required" });
    if (!category) res.status(401).send({ message: "category required" });
    if (!price) res.status(401).send({ message: "price required" });
    if (!description) res.status(401).send({ message: "description required" });

    const existingProduct = await findOne(name);
    if (existingProduct) {
      return res.status(401).send({
        success: false,
        message: "Product already exists",
        existingProduct,
      });
    }

    const newProduct = await new productModel({
      name,
      category,
      price,
      description,
    }).save();

    res.status(200).send({
      success: true,
      message: "Product added successfully",
      newProduct,
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Create product failed", error });
  }
};
