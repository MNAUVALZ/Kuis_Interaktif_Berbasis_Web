const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const { generateCode } = require('../utils/generateCode');

exports.createQuiz = async (req, res, next) => {
  try {
    const { title, classId, duration, shuffle } = req.body;
    const pin = generateCode(6);
    const quiz = await Quiz.create({ title, classId, createdBy: req.user._id, duration, shuffle, pin });
    res.status(201).json(quiz);
  } catch (err) {
    next(err);
  }
};

exports.addQuestion = async (req, res, next) => {
  try {
    const { quizId, text, optionA, optionB, optionC, optionD, correctAnswer } = req.body;
    const question = await Question.create({ quizId, text, optionA, optionB, optionC, optionD, correctAnswer });
    res.status(201).json(question);
  } catch (err) {
    next(err);
  }
};

exports.getQuestions = async (req, res, next) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ message: 'Kuis tidak ditemukan' });

    // Sembunyikan kunci jawaban jika pengakses adalah siswa (bukan pembuat kuis)
    const isCreator = quiz.createdBy.toString() === req.user._id.toString();
    let query = Question.find({ quizId: req.params.quizId });

    if (!isCreator) {
      query = query.select('-correctAnswer');
    }

    let questions = await query;

    // Acak urutan soal jika pengaturan shuffle aktif dan diakses oleh siswa
    if (quiz.shuffle && !isCreator) {
      questions = [...questions].sort(() => Math.random() - 0.5);
    }

    res.json(questions);
  } catch (err) {
    next(err);
  }
};

exports.getQuizByPin = async (req, res, next) => {
  try {
    const { pin } = req.params;
    if (!pin) {
      return res.status(400).json({ message: 'PIN kuis wajib disertakan' });
    }

    const quiz = await Quiz.findOne({ pin: pin.trim().toUpperCase(), isActive: true })
      .populate('classId', 'name code')
      .populate('createdBy', 'name email');

    if (!quiz) {
      return res.status(404).json({ message: 'Kuis tidak ditemukan atau PIN tidak valid' });
    }

    const totalQuestions = await Question.countDocuments({ quizId: quiz._id });

    res.json({
      ...quiz.toObject(),
      totalQuestions,
    });
  } catch (err) {
    next(err);
  }
};
