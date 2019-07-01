/*jshint esversion: 6 */

let mongoose = require('mongoose');

let businessSchema = mongoose.Schema({
    personName: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    businessGstNumber: {
        type: Number,
        required: true
    }
});

let Business = module.exports = mongoose.model('business', businessSchema);
module.exports.get = (callback, limit) => {
    Business.find(callback).limit(limit);
};