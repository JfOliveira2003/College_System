import express from 'express';

const auth = require('./routes/authenticationRoute');
const teacher = require('./routes/teacherRoute');
const student = require('./routes/studentRoute');
const course = require('./routes/courseRoute');

const app = express();
const port : number = 3000; 


app.use(student.createStudent);
app.use(student.deleteStudent);
app.use(student.getStudent);
app.use(student.updateStudent);
app.use(student.getAllStudent);


app.use(teacher.createTeacher);
app.use(teacher.deleteTeacher)
app.use(teacher.getTeacher);
app.use(teacher.updateTeacher);
app.use(teacher.getAllTeacher);

app.use(course.createCourse);
app.use(course.deleteCourse);
app.use(course.getCourse);
app.use(course.updateCourse);


app.use(course.createSubject)
app.use(course.updateSubject)
app.use(course.deleteSubject)
app.use(course.getSubject)
app.use(course.getAllSubjects);


app.use(auth.Login)
app.use(auth.Register)
app.use(auth.Logout)
app.use(auth.forgetPassword)


app.use(auth.resetPassword);


app.listen(port);