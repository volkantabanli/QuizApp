const mongoose = require("mongoose");

const QuestionOptionSchema = new mongoose.Schema({
  optionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

module.exports = QuestionOptionSchema;
