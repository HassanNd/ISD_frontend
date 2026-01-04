const mongoose = require("mongoose");
const Traffic = require("../models/Traffic");

// 🔗 MongoDB Atlas connection (same one you already use)
const MONGO_URI =
  "mongodb+srv://hassannasseraldeen:Hasoun313@cluster0.tupupn8.mongodb.net/Smart_Traffic_system";

const seedTraffic = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to DB:", mongoose.connection.name);

    const trafficData = [
      {
        streetName: "Airport Road",
        date: "2026-01-05",
        time: "08:30"
      },
      {
        streetName: "Main Street",
        date: "2026-01-05",
        time: "12:15"
      },
      {
        streetName: "City Center",
        date: "2026-01-05",
        time: "18:45"
      }
    ];

    await Traffic.insertMany(trafficData);

    console.log("🚦 Traffic reports added successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error adding traffic:", err);
    process.exit(1);
  }
};

seedTraffic();
