
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/User");

const MONGO_URI ="mongodb+srv://hassannasseraldeen:Hasoun313@cluster0.tupupn8.mongodb.net/Smart_Traffic_system" ;

const createAdmin = async () => {
  try {
await mongoose.connect(
  "mongodb+srv://hassannasseraldeen:Hasoun313@cluster0.tupupn8.mongodb.net/Smart_Traffic_system?retryWrites=true&w=majority"
);
console.log("📦 Connected DB:", mongoose.connection.name);

    const existingAdmin = await User.findOne({ username: "admin" });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin", salt);

    const adminUser = new User({
      username: "admin",
      password: hashedPassword
    });

    await adminUser.save();

    console.log("✅ Admin user created successfully");
    console.log("Username: admin");
    console.log("Password: admin");

    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
