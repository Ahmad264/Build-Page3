const mongoose = require("mongoose");

const majorProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: String,
  duration: String,
  image: String,
  trainer: Boolean,
});

module.exports = mongoose.model("MajorProject", majorProjectSchema);
