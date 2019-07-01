'esversion: 6';
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let gstSchema = new Schema({
    personName: {
        type: String,
        required: true,
        unique: false
    },
    businessName: {
        type: String,
        required: true,
        unique: false
    },
    businessGstNumber: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = gstSchema;