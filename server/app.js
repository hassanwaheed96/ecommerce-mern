const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// configure env file
dotenv.config();

// database configuration
connectDB();

// rest object
const app = express();

app.use(express.json());

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send(`<h1>Hello this is node </h1>`);
});

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App running on ${process.env.DEV_MODE} mode and port ${PORT}`);
});
