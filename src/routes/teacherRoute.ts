const teacherController = require('../Controllers/teacherController');
import express from 'express';
const router = express.Router();

exports.createTeacher = router.post('/createTeacher', teacherController.createTeacher);
exports.deleteTeacher = router.delete('/deleteTeacher:id', teacherController.deleteTeacher);
exports.getTeacher = router.get('/getTeacher/:id', teacherController.getTeacher);
exports.updateTeacher = router.post('/updateTeacher/:id', teacherController.updateTeacher);

exports.getAllTeacher = router.get('/getAllTeacher/', teacherController.getAllTeachers);