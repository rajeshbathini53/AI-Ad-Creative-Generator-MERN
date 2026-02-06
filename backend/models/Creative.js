const mongoose = require("mongoose");

const CreativeSchema = new mongoose.Schema({
  headline: String,
  cta: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Creative", CreativeSchema);
