const mongoose = require("mongoose");
const QuizResultAnswerSchema = require("./quizResultAnswer");

const QuizResultSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userName: { type: String, required: true },
  creationTime: { type: Date, default: new Date(), required: true },
  point: {type: Number, required: true},
  questionResultAnswers : [QuizResultAnswerSchema]
});

module.exports = mongoose.model("QuizResult", QuizResultSchema);
