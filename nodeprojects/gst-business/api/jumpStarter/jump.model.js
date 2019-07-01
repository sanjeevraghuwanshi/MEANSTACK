'esversion: 6';
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let jumpSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        abbreviation: String,
        name: String
    },
    orders: [{
        productName: String,
        itemCost: Number
    }],
    latitude: Number,
    longitude: Number

}, {
    timestamps: true
});

module.exports = jumpSchema;