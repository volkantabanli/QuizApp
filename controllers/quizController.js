const asyncHandler = require("express-async-handler");
const quiz = require("../schemas/quiz");

const createNewQuiz = asyncHandler(async (req, res) => {
  try {
    const _quiz = await quiz.create(req.body);

    if (_quiz) {
      res.status(201).json({ message: `New quiz ${req.body.name} created` });
    } else {
      res.status(400).json({ message: "Invalid quiz data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const updateQuiz = asyncHandler(async (req, res) => {
  try {
    const _quiz = await quiz.findByIdAndUpdate(req.query.id, req.body);

    if (_quiz) {
      res.status(200).json({ message: `Quiz ${_quiz.name} updated` });
    } else {
      res.status(400).json({ message: "Invalid quiz data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const deleteQuiz = asyncHandler(async (req, res) => {
  try {
    const _quiz = await quiz.findByIdAndDelete(req.query.id);
    if (_quiz) {
      res.status(200).json({ message: `Quiz ${req.body.name} deleted` });
    } else {
      res.status(400).json({ message: "Invalid quiz data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getAllQuiz = asyncHandler(async (req, res) => {
  const _quiz = await quiz.find();

  if (!_quiz?.length) {
    return res.status(400).json({ message: "No quiz found" });
  }

  res.json(_quiz);
});

module.exports = {
  getAllQuiz,
  createNewQuiz,
  updateQuiz,
  deleteQuiz,
};
