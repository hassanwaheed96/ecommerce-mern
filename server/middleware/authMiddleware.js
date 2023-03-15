// const JWT = require("jsonwebtoken");
// const userModel = require("../models/userModel");
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messgae: "User not authenticated",
      error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: true,
        messgae: "Unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messgae: "User is not admin",
      error,
    });
  }
};

// module.exports = { requireSignIn, isAdmin };
