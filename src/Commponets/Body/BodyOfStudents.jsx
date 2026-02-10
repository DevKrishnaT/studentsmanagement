import React, { useEffect } from "react";
import { deleteStudents, getstudents, UpdateStudent } from "../../api/Studentsapis";
import LoadStudents from "./LoadStudents";
import { useState } from 'react'
import InputArea from "../AddStudents/InputArea";

const BodyOfStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getstudents();
      setStudents(res.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleDelete = async (id)=>{
    await deleteStudents(id);
    fetchStudents();
  }
   const handleUpdate = async (id, updatedData) => {
    try {
      await UpdateStudent(id, updatedData);
      return await fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <InputArea onStudentAdded={fetchStudents} />
  
  <div className="grid grid-cols-5 gap-4 my-10 mx-40">
   {students.map((student) => (
        <LoadStudents
          key={student._id}
          id={student._id}
          name={student.name}
          tableNo={student.tableNo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
  </div>
  </>
  )
};

export default BodyOfStudents;
