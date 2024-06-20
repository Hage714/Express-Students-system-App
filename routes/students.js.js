const express = require('express');

const { getStudents, getStudentById, createStudent} = require("../controllers/students");
const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.get("/:id", getStudentById);

module.exports = router;