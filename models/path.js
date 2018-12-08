const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pathSchema = new Schema({
  path: { type: String, required: false },
  pathPosition: { type: Number, required: false, default: 0 },
  title: { type: String, required: true },
  author: { type: Array, required: true },
  description: { type: String, required: false },
  media: { type: String, required: false },
  categories: { type: Array, required: false},
  date: { type: Date, default: Date.now }
});

const Path = mongoose.model("Path", pathSchema);

module.exports = Path;
