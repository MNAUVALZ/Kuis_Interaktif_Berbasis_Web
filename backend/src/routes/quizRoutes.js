const express = require('express');
const router = express.Router();
const { createQuiz, addQuestion, getQuestions } = require('../controllers/quizController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createQuiz);
router.post('/question', protect, addQuestion);
router.get('/:quizId/questions', protect, getQuestions);

module.exports = router;
