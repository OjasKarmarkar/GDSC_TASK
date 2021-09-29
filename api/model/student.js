const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, default: null },
  division: { type: String, default: null },
  id: { type: Number, unique: true },
  year: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("student", studentSchema);