let JUMP = require('./jump.controller');
let jumpModel = require('./jump.dao');

module.exports = (router) => {
    router.post('/jump/create', JUMP.createJUMP);
    router.get('/jump/get', JUMP.getAllJump);
    router.get('/jump/get/:personName', JUMP.getJump);
    router.put('/jump/update/:id', function (req, res, next) {
        jumpModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });
    router.delete('/remove/:id', JUMP.removeJump);
};