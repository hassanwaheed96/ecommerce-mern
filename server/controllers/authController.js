const userModel = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name) return res.send({ error: "Name is required" });
    if (!email) return res.send({ error: "Email is required" });
    if (!password) return res.send({ error: "Password is required" });
    if (!phone) return res.send({ error: "Phone is required" });
    if (!address) return res.send({ error: "Address is required" });

    // for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: true, message: "Email has already been used" });
    }

    // register new user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Email or password" }, error);
    }

    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "Email already registered",
      });
    }

    const match = await comparePassword(password, existingUser.password, {
      expiresIn: "7d",
    });
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = await JWT.sign(
      { _id: existingUser._id },
      process.env.JWT_SECRET
    );

    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        name: existingUser.name,
        email: existingUser.email,
        phone: existingUser.phone,
        address: existingUser.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

const testController = (req, res) => {
  console.log("Protected route works");
  res.send("Protected route works");
};

module.exports = { registerController, loginController, testController };
