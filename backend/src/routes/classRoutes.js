const express = require('express');
const router = express.Router();
const { createClass, getClasses, getClassById, joinClass } = require('../controllers/classController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createClass);
router.get('/', protect, getClasses);
router.get('/:id', protect, getClassById);
router.post('/join', protect, joinClass);

module.exports = router;
