import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';


const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


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