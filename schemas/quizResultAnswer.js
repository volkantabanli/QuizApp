const mongoose = require("mongoose");

const QuizResultAnswerSchema = new mongoose.Schema({
  text: { type: String },
  optionId: { type: mongoose.Schema.Types.ObjectId},
});

module.exports = QuizResultAnswerSchema;
