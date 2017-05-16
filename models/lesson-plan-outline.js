const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  schoolyear: String, // 学年
  term: Number, // 学期  1 2
  grade: String, // 年级
  outline: [{
    week: Number, // 周数
    lessons: [{
      lesson: Number, // 课时
      content: String, // 重点
    }],
  }],
  createAt: { type: Date, default: Date.now },
  updateAt: Date,
  createBy: String,
});

module.exports = mongoose.model('lesson_plan_outline', schema);