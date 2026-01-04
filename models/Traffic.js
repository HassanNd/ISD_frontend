const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema({
  streetName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Traffic", trafficSchema);
