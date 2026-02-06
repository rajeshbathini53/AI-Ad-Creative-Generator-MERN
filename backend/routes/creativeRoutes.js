const express = require("express");
const router = express.Router();
const Creative = require("../models/Creative");

router.post("/save", async (req, res) => {
  const creative = await Creative.create(req.body);
  res.json(creative);
});

router.get("/history", async (req, res) => {
  const data = await Creative.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
