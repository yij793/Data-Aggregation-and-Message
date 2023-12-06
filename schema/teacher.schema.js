const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: String,
    subject: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = TeacherSchema