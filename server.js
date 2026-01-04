const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://hassannasseraldeen:Hasoun313@cluster0.tupupn8.mongodb.net/Smart_Traffic_system"
).then(() => console.log("✅ MongoDB Connected"));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/traffic", require("./routes/traffic.routes"));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
