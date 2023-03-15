// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const categoryRoute = require("./routes/categoryRoute");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
// configure env file
dotenv.config();

// database configuration
connectDB();

// rest object
const app = express();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);

// rest api
app.get("/", (req, res) => {
  res.send(`<h1>Hello this is node </h1>`);
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App running on ${process.env.DEV_MODE} mode and port ${PORT}`);
});
