const mongoose = require("mongoose");
const questionOptionSchema = require("./questionOption");

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: {
    type: String,
    enum: ["multipleChoice", "classic", "gapFilling", "trueFalse"],
    required: true,
  },
  point: { type: Number, required: true },
  questionOptions: [questionOptionSchema]
});

module.exports = QuestionSchema;
