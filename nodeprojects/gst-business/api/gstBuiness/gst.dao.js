'esversion: 6';
let mongoose = require('mongoose');
let gstSchema = require('./gst.model');

gstSchema.statics = {
    create: function (data, cb) {
        const gst = new this(data);
        gst.save(cb);
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

const gstModel = mongoose.model('Gst', gstSchema);

module.exports = gstModel;