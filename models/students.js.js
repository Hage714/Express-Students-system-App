const mongoose = require('mongoose');

/*
1. Name
2. Email
3. Adm no
*/

const StudentSchema = new mongoose.Schema({ //creating an object of the class schema
    name: String,
    email: String,
    admNo: Number
});

module.exports = mongoose.model('Student', StudentSchema);