const express = require('express');
const router = express.Router();
const { createQuiz, addQuestion, getQuestions, getQuizByPin } = require('../controllers/quizController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createQuiz);
router.post('/question', protect, addQuestion);
router.get('/pin/:pin', protect, getQuizByPin);
router.get('/:quizId/questions', protect, getQuestions);

module.exports = router;
