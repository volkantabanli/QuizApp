const mongoose = require("mongoose");
const questionSchema = require("./question");

const QuizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creationTime: { type: Date, default: new Date(), required: true },
  question: [questionSchema]
});

module.exports = mongoose.model("Quiz", QuizSchema);
