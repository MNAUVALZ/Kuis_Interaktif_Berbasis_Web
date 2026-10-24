const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load konfigurasi environment dari backend/.env
dotenv.config({ path: path.join(__dirname, '../.env') });

const Character = require('./models/Character');

const charactersData = [
  {
    name: 'Ksatria Cilik',
    price: 100,
    image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ksatria',
  },
  {
    name: 'Penyihir Cerdas',
    price: 200,
    image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Penyihir',
  },
  {
    name: 'Cyber Ninja',
    price: 350,
    image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ninja',
  },
  {
    name: 'Raja Logika',
    price: 500,
    image: 'https://api.dicebear.com/7.x/bottts/svg?seed=King',
  },
  {
    name: 'Kapten Sains',
    price: 650,
    image: 'https://api.dicebear.com/7.x/bottts/svg?seed=CaptainScience',
  },
  {
    name: 'Robot Penjelajah',
    price: 800,
    image: 'https://api.dicebear.com/7.x/bottts/svg?seed=ExplorerBot',
  },
];

async function seedCharacters() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/quiszoors';
    console.log(`Menghubungkan ke database: ${mongoUri}...`);
    await mongoose.connect(mongoUri);
    console.log('✅ Berhasil terhubung ke MongoDB.');

    console.log('Memproses seeding katalog karakter avatar...');
    let insertedCount = 0;
    let updatedCount = 0;

    for (const char of charactersData) {
      const existing = await Character.findOne({ name: char.name });
      if (existing) {
        existing.price = char.price;
        existing.image = char.image;
        await existing.save();
        updatedCount++;
      } else {
        await Character.create(char);
        insertedCount++;
      }
    }

    console.log(`🎉 Seeder selesai! Ditambahkan: ${insertedCount}, Diperbarui: ${updatedCount}`);
    const totalChars = await Character.countDocuments();
    console.log(`Total karakter avatar saat ini: ${totalChars}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Gagal menjalankan seeder karakter:', error.message);
    process.exit(1);
  }
}

seedCharacters();
