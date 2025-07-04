const mongoose = require('mongoose');

const miniProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: [String],
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('MiniProject', miniProjectSchema);
