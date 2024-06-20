const mongoose = require('mongoose');  //importing mongoose

const connectionString = "mongodb://localhost:27017/studentdb";

const connect_database = async () => {
await mongoose.connect(connectionString).then(() => console.log("Database connection established"))
};

module.exports.connect_database = connect_database;