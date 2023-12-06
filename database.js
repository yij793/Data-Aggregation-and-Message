const mongoose = require('mongoose');
const StudentSchema = require('./schema/student.schema')
const TeacherSchema = require('./schema/teacher.schema')
const ClassesSchema = require('./schema/classes.schema')
const Student = mongoose.model('Student', StudentSchema);
const Teacher = mongoose.model('Teacher', TeacherSchema);
const Class = mongoose.model('Class', ClassesSchema);

module.exports = { Student, Teacher, Class }