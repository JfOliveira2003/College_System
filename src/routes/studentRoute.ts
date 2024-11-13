const studentController = require('../Controllers/studentController');
import express from 'express';
const router = express.Router();

exports.createStudent = router.post('/createStudent', studentController.createStudent);
exports.deleteStudent = router.delete('/deleteStudent:id', studentController.deleteStudent);
exports.getStudent = router.get('/getStudent/:id', studentController.getStudent);
exports.updateStudent = router.post('/updateStudent/:id', studentController.updateStudent);

exports.getAllStudent = router.get('/getAllStudents/', studentController.getAllStudents);