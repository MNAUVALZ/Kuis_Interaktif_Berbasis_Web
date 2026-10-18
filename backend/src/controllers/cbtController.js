const Question = require('../models/Question');
const Score = require('../models/Score');
const { addPoints } = require('./gamificationCtrl');

exports.submitExam = async (req, res, next) => {
  try {
    const { quizId, answers } = req.body; // answers: { questionId: 'A' | 'B' | 'C' | 'D' }

    const questions = await Question.find({ quizId });
    let correctCount = 0;

    questions.forEach((q) => {
      if (answers[q._id.toString()] === q.correctAnswer) {
        correctCount++;
      }
    });

    const total = questions.length;
    const pointsEarned = Math.round((correctCount / total) * 100);

    const scoreRecord = await Score.create({
      userId: req.user._id,
      quizId,
      score: correctCount,
      total,
      pointsEarned,
    });

    // Update user points & level
    await addPoints(req.user._id, pointsEarned);

    res.json({ score: correctCount, total, pointsEarned });
  } catch (err) {
    next(err);
  }
};
