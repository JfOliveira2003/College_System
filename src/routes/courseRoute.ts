const courseController = require('../Controllers/courseController');
import express from 'express';
const router = express.Router();

exports.createCourse = router.post('/createCourse', courseController.createCourse);
exports.deleteCourse = router.delete('/deleteCourse', courseController.deleteCourse);
exports.getCourse = router.get('/getCourse/:id', courseController.getCourse);
exports.updateCourse = router.post('/updateCourse/:id', courseController.updateCourse);


exports.createSubject = router.post('/createSubject', courseController.createSubject);


exports.updateSubject = router.post('/updateSubject/:id', courseController.updateSubject);
exports.deleteSubject = router.post('deleteSubject/:id', courseController.deleteSubject);
exports.getAllSubjects = router.post('/allSubjects', courseController.getAllSubjects);
exports.getSubject = router.post('/getSubject/:id', courseController.getSubject);