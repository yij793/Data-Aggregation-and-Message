const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    gride: Number,
    classId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = StudentSchema