const app = require('./app')

const { AddStudent, GetStudents, GetStudentById, UpdateStudent, DeleteStudent } = require('./route/student.route');

// add a stduent, email is required and unique
app.post('/post/student', AddStudent);
// get all students 
app.get('/get/students', GetStudents);
// get student by id
app.get('/get/student', GetStudentById)
// update user
app.patch('/put/student', UpdateStudent)
// delete user
app.delete('/delete/student', DeleteStudent)
