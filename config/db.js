const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://hassannasseraldeen:Hasoun313@cluster0.tupupn8.mongodb.net/Smart_Traffic_system?retryWrites=true&w=majority&appName=Cluster0");
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
