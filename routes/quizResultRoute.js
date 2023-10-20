const express = require("express");
const router = express.Router();
const quizResultController = require("../controllers/quizResultController");

router
  .route("/").get(quizResultController.getAllQuizResult)
  .post(quizResultController.createNewQuizResult)
  .put(quizResultController.updateQuizResult)
  .delete(quizResultController.deleteQuizResult)

module.exports = router;
