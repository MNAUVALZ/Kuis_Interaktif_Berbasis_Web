const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Character', characterSchema);
