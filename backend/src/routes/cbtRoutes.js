const express = require('express');
const router = express.Router();
const { submitExam } = require('../controllers/cbtController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/submit', protect, submitExam);

module.exports = router;
