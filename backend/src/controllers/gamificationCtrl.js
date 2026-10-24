const User = require('../models/User');

/**
 * Add points to user and recalculate level.
 * Every 100 points = 1 level.
 */
exports.addPoints = async (userId, points) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  user.points += points;
  user.level = Math.floor(user.points / 100) + 1;
  await user.save();
  return user;
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .select('-password')
      .populate('ownedCharacters');

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};
