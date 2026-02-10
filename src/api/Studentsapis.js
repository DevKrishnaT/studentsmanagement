import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const getstudents = () => API.get("students");
export const addstudents = (data) => API.post("/students", data);
export const UpdateStudent = (id, data) => {
  API.patch(`/student/${id}`, data);
};
export const deleteStudents = (id) => API.delete(`/student/${id}`);
