/*jshint esversion: 6 */

Student = require('./studentModel');

exports.index = (req, res) => {
    Student.get((err, student) => {
        if (!!err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            status: 'success',
            message: 'Student data retrieved successfully',
            data: student
        });
    });
};

exports.new = (req, res) => {
    let student = new Student();

    student.studentName = req.body.studentName ? req.body.studentName : student.studentName;
    student.fName = req.body.fName;
    student.mName = req.body.mName;
    student.gender = req.body.gender;
    student.email = req.body.email;
    student.contactNo = req.body.contactNo;

    student.save((err) => {
        if (!!err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            message: 'new Student created successfully',
            data: student
        });
    });
};

exports.view = (req, res) => {
    Student.findById(req.params.student_id, (err, student) => {
        if (!!err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            message: 'Student details loading',
            data: student
        });
    });
};


exports.update = (req, res) => {
    Student.findById(req.params.student_id, (err, student) => {
        if (!!err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        student.studentName = req.body.studentName || student.studentName;
        student.fName = req.body.fName;
        student.mName = req.body.mName;
        student.gender = req.body.gender;
        student.email = req.body.email;
        student.contactNo = req.body.contactNo;

        student.save((err) => {
            if (!!err) {
                res.json({
                    status: 'error',
                    message: err
                });
            }
            res.json({
                message: 'Student info updated',
                data: student
            });
        });
    });
};

exports.delete = (req, res) => {
    Student.remove(req.params.student_id, (err, student) => {
        if (!!err) {
            res.json({
                status: 'error',
                message: err
            });
        }
        res.json({
            message: 'Student deleted',
            status: 'success'
        });
    });
};