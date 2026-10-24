const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { getProfile } = require('../controllers/gamificationCtrl');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getProfile);

module.exports = router;
