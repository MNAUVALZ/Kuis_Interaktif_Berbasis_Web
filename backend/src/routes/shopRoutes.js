const express = require('express');
const router = express.Router();
const Character = require('../models/Character');
const User = require('../models/User');
const { protect } = require('../middlewares/authMiddleware');

// Get all characters
router.get('/', protect, async (req, res, next) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    next(err);
  }
});

// Buy a character
router.post('/buy', protect, async (req, res, next) => {
  try {
    const { characterId } = req.body;
    const character = await Character.findById(characterId);
    if (!character) return res.status(404).json({ message: 'Karakter tidak ditemukan' });

    const user = await User.findById(req.user._id);
    if (user.points < character.price) return res.status(400).json({ message: 'Poin tidak cukup' });
    if (user.ownedCharacters.includes(characterId)) return res.status(400).json({ message: 'Karakter sudah dimiliki' });

    user.points -= character.price;
    user.ownedCharacters.push(characterId);
    await user.save();

    res.json({ message: 'Berhasil membeli karakter', user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
