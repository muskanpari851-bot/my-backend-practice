import {Router} from 'express';

import { 
    getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent
    } from '../students/students.controllers.js';

const studentRouter: Router= Router();

studentRouter.get('/getstudent', getAllStudents);
studentRouter.get('/getstudent/:id', getStudentById);
studentRouter.post('/createstudent', createStudent);
studentRouter.put('/updatestudent/:id', updateStudent);
studentRouter.delete('/deletestudent/:id', deleteStudent);

export default studentRouter;