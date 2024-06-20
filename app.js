const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// database configuration
const { connect_database } = require('./db/connect');
connect_database();

// routes imports
const studentsRoutes = require('./routes/students.js')

//base routes
app.get("/", (req, res) => {
res.json({"message": "Server is running"}).sendStatus(200);
});

app.use('/students', studentsRoutes);

//start the server
app.listen(PORT, () => {
    console.log("server listening on port");
});