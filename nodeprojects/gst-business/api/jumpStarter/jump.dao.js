'esversion: 6';
let mongoose = require('mongoose');
let jumpSchema = require('./jump.model');

jumpSchema.statics = {
    create: function (data, cb) {
        const jump = new this(data);
        jump.save(cb);
    },
    get: function (query, cb) {
        this.find(query, cb);
    },
    getByName: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {
            $set: updateData
        }, {
            new: true
        }, cb);
    },
    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

const jumpModel = mongoose.model('Jump', jumpSchema);

module.exports = jumpModel;