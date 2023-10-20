const asyncHandler = require("express-async-handler");
const quizResult = require("../schemas/quizResult");

const createNewQuizResult = asyncHandler(async (req, res) => {
  try {
    const _quizResult = await quizResult.create(req.body);

    if (_quizResult) {
      res.status(201).json({ message: `New quiz ${req.body.name} created` });
    } else {
      res.status(400).json({ message: "Invalid quiz data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const updateQuizResult = asyncHandler(async (req, res) => {
  try {
    const _quizResult = await quizResult.findByIdAndUpdate(req.query.id, req.body);

    if (_quizResult) {
      res.status(200).json({ message: `Quiz ${_quizResult.name} updated` });
    } else {
      res.status(400).json({ message: "Invalid quiz data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const deleteQuizResult = asyncHandler(async (req, res) => {
  try {
    const _quizResult = await quizResult.findByIdAndDelete(req.query.id);
    if (_quizResult) {
      res.status(200).json({ message: `Quiz ${req.body.name} deleted` });
    } else {
      res.status(400).json({ message: "Invalid quiz data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getAllQuizResult = asyncHandler(async (req, res) => {
  const _quizResult = await quizResult.find();

  if (!_quizResult?.length) {
    return res.status(400).json({ message: "No quiz found" });
  }

  res.json(_quizResult);
});

module.exports = {
  deleteQuizResult,
  createNewQuizResult,
  updateQuizResult,
  getAllQuizResult,
};
