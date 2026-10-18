const express = require('express');
const router = express.Router();
const { createClass, getClasses, joinClass } = require('../controllers/classController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createClass);
router.get('/', protect, getClasses);
router.post('/join', protect, joinClass);

module.exports = router;
