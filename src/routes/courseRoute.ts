const courseController = require('../Controllers/courseController');
import express from 'express';
const router = express.Router();

exports.createCourse = router.post('/createCourse', courseController.createCourse);
exports.deleteCourse = router.delete('/deleteCourse', courseController.deleteCourse);
exports.getCourse = router.get('/getCourse/:id', courseController.getCourse);
exports.updateCourse = router.post('/updateCourse/:id', courseController.updateCourse);


exports.createSubject = router.post('/createSubject', courseController.createSubject);
