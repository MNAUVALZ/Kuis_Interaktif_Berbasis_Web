const Class = require('../models/Class');
const Quiz = require('../models/Quiz');
const { generateCode } = require('../utils/generateCode');

exports.createClass = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Nama kelas wajib diisi' });
    }

    const code = generateCode(6);
    const newClass = await Class.create({ name, code, teacher: req.user._id });
    res.status(201).json(newClass);
  } catch (err) {
    next(err);
  }
};

exports.getClasses = async (req, res, next) => {
  try {
    const classes = await Class.find({
      $or: [{ teacher: req.user._id }, { students: req.user._id }],
    }).populate('teacher', 'name email');

    res.json(classes);
  } catch (err) {
    next(err);
  }
};

exports.getClassById = async (req, res, next) => {
  try {
    const cls = await Class.findById(req.params.id)
      .populate('teacher', 'name email')
      .populate('students', 'name email');

    if (!cls) return res.status(404).json({ message: 'Kelas tidak ditemukan' });

    const quizzes = await Quiz.find({ classId: cls._id, isActive: true })
      .select('title duration pin shuffle isActive createdAt');

    res.json({
      ...cls.toObject(),
      quizzes,
    });
  } catch (err) {
    next(err);
  }
};

exports.joinClass = async (req, res, next) => {
  try {
    const { code } = req.body;
    if (!code) {
      return res.status(400).json({ message: 'Kode kelas wajib diisi' });
    }

    const cls = await Class.findOne({ code: code.trim().toUpperCase() });
    if (!cls) return res.status(404).json({ message: 'Kelas tidak ditemukan' });

    // Jangan masukkan jika user adalah guru pemilik kelas
    if (cls.teacher.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: 'Anda adalah guru pembuat kelas ini' });
    }

    if (!cls.students.includes(req.user._id)) {
      cls.students.push(req.user._id);
      await cls.save();
    }

    res.json(cls);
  } catch (err) {
    next(err);
  }
};
