const Class = require('../models/Class');
const { generateCode } = require('../utils/generateCode');

exports.createClass = async (req, res, next) => {
  try {
    const { name } = req.body;
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
    });
    res.json(classes);
  } catch (err) {
    next(err);
  }
};

exports.joinClass = async (req, res, next) => {
  try {
    const { code } = req.body;
    const cls = await Class.findOne({ code });
    if (!cls) return res.status(404).json({ message: 'Kelas tidak ditemukan' });

    if (!cls.students.includes(req.user._id)) {
      cls.students.push(req.user._id);
      await cls.save();
    }
    res.json(cls);
  } catch (err) {
    next(err);
  }
};
