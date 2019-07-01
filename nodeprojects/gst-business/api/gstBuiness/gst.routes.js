let GST = require('./gst.controller');
let gstModel = require('./gst.dao');

module.exports = (router) => {
    router.post('/create', GST.createGST);
    router.get('/get', GST.getAllGst);
    router.get('/get/:personName', GST.getGst);
    router.put('/update/:id', function (req, res, next) {
        gstModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });
    router.delete('/remove/:id', GST.removeGst);
};