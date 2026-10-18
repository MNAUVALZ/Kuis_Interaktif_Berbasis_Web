const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const { generateCode } = require('../utils/generateCode');

exports.createQuiz = async (req, res, next) => {
  try {
    const { title, classId, duration, shuffle } = req.body;
    const pin = generateCode(6);
    const quiz = await Quiz.create({ title, classId, createdBy: req.user._id, duration, shuffle, pin });
    res.status(201).json(quiz);
  } catch (err) {
    next(err);
  }
};

exports.addQuestion = async (req, res, next) => {
  try {
    const { quizId, text, optionA, optionB, optionC, optionD, correctAnswer } = req.body;
    const question = await Question.create({ quizId, text, optionA, optionB, optionC, optionD, correctAnswer });
    res.status(201).json(question);
  } catch (err) {
    next(err);
  }
};

exports.getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.find({ quizId: req.params.quizId });
    res.json(questions);
  } catch (err) {
    next(err);
  }
};
