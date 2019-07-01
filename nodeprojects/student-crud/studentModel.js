/*jshint esversion: 6 */

let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    fName: {
        type: String,
        required: true
    },
    mName: {
        type: String,
        required: true
    },
    gender: String,
    contactNo: String,
    email: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

let Student = module.exports = mongoose.model('student', studentSchema);
module.exports.get = (callback, limit) => {
    Student.find(callback).limit(limit);
};