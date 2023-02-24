const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error in Mongodb is ${err}`);
  }
};

module.exports = connectDB;
