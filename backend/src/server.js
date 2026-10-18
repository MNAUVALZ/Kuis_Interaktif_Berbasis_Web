const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const classRoutes = require('./routes/classRoutes');
const quizRoutes = require('./routes/quizRoutes');
const cbtRoutes = require('./routes/cbtRoutes');
const shopRoutes = require('./routes/shopRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/cbt', cbtRoutes);
app.use('/api/shop', shopRoutes);

// Root Healthcheck
app.get('/', (req, res) => {
  res.json({ message: 'QuisZoors API is running' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
