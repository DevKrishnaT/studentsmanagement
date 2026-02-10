import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    name: String,
    tableNo : Number
})

const students = mongoose.model("Students" , StudentSchema);

export default students;