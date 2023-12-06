const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassesSchema = new Schema({
    subject: String,
    teacherId: {
        type: String,
        required: true,
        unique: true
    },
    numberOfStudent: Number,
});

module.exports = ClassesSchema