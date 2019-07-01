// Require Business model in our routes module
let Business = require('./gstBusinessModel');

exports.add = (req, res) => {
    let business = new Business(req.body);

    business.save()
        .then(business => {
            res.status(200).json({
                'business': 'business in added successfully'
            });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    Business.findById(id, function (err, business) {
        res.json(business);
    });
};

exports.index = (req, res) => {
    Business.find(function (err, businesses) {
        if (err) {
            console.log(err);
        } else {
            res.json(businesses);
        }
    });
};

exports.edit = (req, res) => {
    Business.findById(req.params.id, function (err, next, business) {
        if (!business) {
            return next(new Error('Could not load Document'));
        } else {
            business.personName = req.body.personName;
            business.businessName = req.body.businessName;
            business.businessGstNumber = req.body.businessGstNumber;

            business.save().then(business => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
};

exports.delete = (req, res) => {
    Business.find(function (err, businesses) {
        if (err) {
            console.log(err);
        } else {
            res.json(businesses);
        }
    });
};