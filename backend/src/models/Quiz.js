const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  classId:    { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  createdBy:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  duration:   { type: Number, required: true }, // in minutes
  shuffle:    { type: Boolean, default: false },
  pin:        { type: String, required: true, unique: true },
  isActive:   { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
