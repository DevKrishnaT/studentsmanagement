import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';

import students from './Models/Students.js';


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
///// get the students
app.get("/api/students" , async (req , res)=>{
  const studentss = await students.find();
  res.json(studentss);
    
});


// post the students

app.post("/api/students" , async (req , res) =>{
  const Student = await students(req.body);
  await Student.save();
  res.json({message: "saved"});
})


/// update the student
app.patch("/api/student/:id" , async (req , res) =>{
  try {
    const { id } = req.params;

    const updateedStudnets = await students.findByIdAndUpdate(
      id,
      req.body,
      {new :true}
    );
      if (!updateedStudnets) {
      return res.status(404).json({ message: "Student not found" });
    }
     res.json(updateedStudnets);
  } catch (error) {
    res.status(500).json({error: error.message})
    
  }
})

/// delete Students

app.delete("/api/student/:id" , async (req , res) =>{
  try {
    const {id} = req.params;

    const deletedStudent  = await students.findByIdAndDelete(id);
    
    if(!deletedStudent){
      return res.status(404).json({message: "student not find "})
    }

    res.json({
      message: "Student deleted successfully",
      deletedStudent
    });
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})



mongoose
.connect("mongodb://127.0.0.1:27017/StudentsManagment")
.then(()=>{
    console.log("connected");
    
})
.catch(()=>{
    console.error("hello world");
})


const PORT = 4000;

app.listen(PORT , () =>{
    console.log(`listening on Port ${PORT}`);
})