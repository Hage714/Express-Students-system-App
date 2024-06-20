const Student = require("../models/students.js");  //importing data from models

const getStudents = async (req, res) => {
const students = await Student.find({});
res.send({count: students.length, students: students}).status(200);
};

const getStudentById = async (req, res) => {
    const id = req.params.id;
try {
    const student = await Student.findById({_id: id});
    if (!student) {
res.send({"error": "Student not found"}).status(404);
    }
    res.send(student).status(200);
} catch (error) {
    console.log(error);
    res.status(500).send({"error": "Error.message"});
}
};

const createStudent = async (req, res) => {
    const student = req.body;
    const newStudent = await Student.create(student);
    res.send(newStudent).status(201);
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
}