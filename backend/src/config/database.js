const mongoose = require('mongoose');
const Character = require('../models/Character');

const defaultCharacters = [
  { name: 'Ksatria Cilik', price: 100, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ksatria' },
  { name: 'Penyihir Cerdas', price: 200, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Penyihir' },
  { name: 'Cyber Ninja', price: 350, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ninja' },
  { name: 'Raja Logika', price: 500, image: 'https://api.dicebear.com/7.x/bottts/svg?seed=King' },
];

const seedInitialData = async () => {
  try {
    const count = await Character.countDocuments();
    if (count === 0) {
      await Character.insertMany(defaultCharacters);
      console.log('✅ Database Seeder: 4 Karakter Avatar default berhasil di-seed.');
    }
  } catch (err) {
    console.warn('⚠️ Seeder warning:', err.message);
  }
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    await seedInitialData();
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('Pastikan MongoDB service aktif secara lokal atau gunakan URL MongoDB Atlas di backend/.env');
    process.exit(1);
  }
};

module.exports = connectDB;
