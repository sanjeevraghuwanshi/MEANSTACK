let GST = require('./gst.dao');

exports.createGST = (req, res, next) => {
    const gst = {
        personName: req.body.personName,
        businessName: req.body.businessName,
        businessGstNumber: req.body.businessGstNumber,
    };

    GST.create(gst, (err, gst) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: "GST created successfully"
        });
    });
};

exports.getAllGst = (req, res, next) => {

    GST.get({}, (err, gst) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            gst: gst
        });
    });
};

exports.getGst = (req, res, next) => {

    GST.get({
        personName: req.params.personName
    }, (err, gst) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            gst: gst
        });
    });
};
exports.updateGST = function (req, res, next) {
    var hero = {
        personName: req.body.personName,
        businessName: req.body.businessName,
        businessGstNumber: req.body.businessGstNumber,
    };

    GST.update({
        _id: req.params.id
    }, hero, function (err, hero) {
        if (err) {
            // res.json({
            //     error: err
            // })
        }
        // res.json({
        //     message: "Hero updated successfully"
        // })
    })
};

exports.removeGst = (req, res, next) => {

    GST.delete({
        _id: req.params.id
    }, (err, gst) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: `Gst deleted successfully`
        });
    });
};