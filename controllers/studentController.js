const Student = require("../models/student");

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ success: true, students });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create student
exports.postStudent = async (req, res) => {
  try {
    const { name, age, phone, address } = req.body;
    if (name === "") {
      return res
        .status(400)
        .json({ success: false, message: "Student name is required!" });
    }
    const student = await Student.create({ name, age, phone, address });
    res.status(201).json({
      success: true,
      message: "Student has created successfully!",
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update student
exports.updateStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found!",
      });
    }
    student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ success: true, message: "Student has updated!", student });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);
        if (!student) {
          return res.status(404).json({
            success: false,
            message: "Student not found!",
          });
        } 
        await student.remove();
        res.status(200).json({success: true, message: 'Student has deleted successfully!'})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}

// Get single student detail
exports.studentDetail = async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);
        if (!student) {
          return res.status(404).json({
            success: false,
            message: "Student not found!",
          });
        } 
        res.status(200).json({success: true, student})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}


