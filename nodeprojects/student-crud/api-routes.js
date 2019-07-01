/*jshint esversion: 6 */
// Filename: api-routes.js
// Initialize express router

let router = require('express').Router();

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API its working',
        message: 'Welcome to Resthub crafted with love'
    });
});

// Import student controller
let studentController = require('./studentController');

//student routes
router.route('/student')
    .get(studentController.index)
    .post(studentController.new);

router.route('/student/:student_id')
    .get(studentController.view)
    .patch(studentController.update)
    .put(studentController.update)
    .delete(studentController.delete);

// Import student controller
let gstController = require('./gstBusinessController');

router.route('/gst').get(gstController.index);
router.route('/gst/add').post(gstController.add);
router.route('/gst/edit/:id').get(gstController.findById);
router.route('/gst/update/:id').post(gstController.edit);
router.route('/gst/delete/:id').get(gstController.delete);



// Export API routes
module.exports = router;