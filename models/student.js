const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter student name']
    },
    age: {
        type: Number,
        required: [true, 'Please enter age']
    },
    phone: {
        type: String,
        required: [true, 'Please enter phone number']
    },
    address: {type: String}
}, {timestamps: true})

module.exports = mongoose.model("Student", studentSchema)