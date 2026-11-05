
  import type {Request,Response} from 'express';
const arrOfObj=[
    {
        id:1,
        name:'muskan',
        age:12,
        email:'abc@gmail.com',
        course:'computer science',
        isActive:true
    },
    {
        id:2,
        name:'maryam',
        age:24,
        email:'def@gmail.com',
        course:'computer science',
        isActive:true
    },
    {
        id:3,
        name:'sara',
        age:21,
        email:'wsq@gmail.com',
        course:'computer science',
        isActive:true
    }
];
type studentIndex={
    name?:string;
    age?:number;
    email?:string;
    course?:string;
    
};
export const getAllStudents=(req:Request<{},{},studentIndex>,res:Response)=>{
    try{
        res.status(200).json({ 
            message:'Students retrieved successfully',
            students:arrOfObj
        });
    } catch(error){
        res.status(500).json({
            message:'Error retrieving students',
        });
    }
};
export const getStudentById=(req:Request<{id:number}>,res:Response)=>{
    try{
        res.status(200).json({
            message:'Student retrieved successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error retrieving student'
        });
    }
    const studentId=Number(req.params.id);
    const student=arrOfObj.find(student=>student.id===studentId);   
    if(!student){
        return res.status(404).json({
            message:'Student not found'
        });
    }
    res.status(200).json({
        message:'Student retrieved successfully',
        student
    });
};  
export const createStudent=(req:Request<studentIndex>,res:Response)=>{
    try{
        res.status(201).json({
            message:'Student added successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error adding student'
        });
    }
    if(!req.body.name || !req.body.age || !req.body.email || !req.body.course){
        return res.status(400).json({  
            message:'Please provide requirement'
        });
    }
    const newStudent={
         id:arrOfObj.length>0 ? Math.max(...arrOfObj.map(s=>s.id))+1 : 1,
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        course:req.body.course,
        
    };
    arrOfObj.push(newStudent);
    res.status(201).json({
        message:'Student added successfully',
        student:newStudent
    });
};
export const updateStudent=(req:Request<{id:number}>,res:Response)=>{
    try{
        res.status(200).json({
            message:'Student updated successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error updating student'
        });
    }
        const studentId=Number(req.params.id);
        const studentIndex=arrOfObj.findIndex(student=>student.id===studentId);
        if(studentIndex===-1){
            return res.status(404).json({
                message:'Student not found'
            });
        }
        const updatedStudent={
            ...arrOfObj[studentIndex],
            ...req.body
        };
        arrOfObj[studentIndex]=updatedStudent;
        res.status(200).json({
            message:'Student updated successfully',
            student:updatedStudent
        });
};
export const deleteStudent=(req:Request<{id:number}>,res:Response)=>{
    try{
        res.status(200).json({
            message:'Student deleted successfully',
        });
    } catch(error){
        res.status(500).json({
            message:'Error deleting student'
        });
    }
        const studentId=Number(req.params.id);
        const studentIndex=arrOfObj.findIndex(student=>student.id===studentId);
        if(studentIndex===-1){
            return res.status(404).json({
                message:'Student not found'
            });
        }
        arrOfObj.splice(studentIndex, 1);
        res.status(200).json({
            message:'Student deleted successfully'
        });
    
    }