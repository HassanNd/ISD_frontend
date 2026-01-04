const express = require("express");
const Traffic = require("../models/Traffic");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

/**
 * ➕ Add traffic report
 * POST /api/traffic
 */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { streetName, date, time } = req.body;

    if (!streetName || !date || !time) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const traffic = await Traffic.create({
      streetName,
      date,
      time
    });

    res.status(201).json({
      message: "Traffic report added",
      traffic
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * 📥 Get all traffic reports
 * GET /api/traffic
 */
// GET /api/traffic?sort=desc|asc
router.get("/", authMiddleware, async (req, res) => {
  try {
    const sortOrder = req.query.sort === "asc" ? 1 : -1;

    const traffic = await Traffic.find().sort({ _id: sortOrder });

    res.json(traffic);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
