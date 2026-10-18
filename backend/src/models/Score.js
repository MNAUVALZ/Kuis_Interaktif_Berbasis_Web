const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quizId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score:    { type: Number, required: true },
  total:    { type: Number, required: true },
  pointsEarned: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
