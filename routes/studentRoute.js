const express = require("express");
const { getStudents, postStudent, updateStudent, deleteStudent, studentDetail } = require("../controllers/studentController");
const router = express.Router();

router.route("/students").get(getStudents);
router.route("/student/create").post(postStudent);
router.route("/student/:id").put(updateStudent).delete(deleteStudent).get(studentDetail);

module.exports = router