const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router
  .route("/").get(quizController.getAllQuiz)
  .post(quizController.createNewQuiz)
  .put(quizController.updateQuiz)
  .delete(quizController.deleteQuiz)

module.exports = router;
