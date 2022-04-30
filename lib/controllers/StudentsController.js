
const StudentService = require("./../services/StudentService")
const Reader = require("./../utils/Reader")

class StudentController{
    static getAllStudent() {
        const NewStudent = Reader.readJsonFile("Students.json");
        return StudentService.getAllStudents(NewStudent);
    }

    static getStudentsEmailwithCertification(certificate) {
        const NewStudent = Reader.readJsonFile("Students.json");
        return StudentService.getStudentssEmailwithCertification(
            NewStudent,
            certificate
        );
    }

    static getStudentsWithCredits(credits) {
        const NewStudent = Reader.readJsonFile("Students.json");
        return StudentService.getStudentsWithCredits(NewStudent, credits);
    }
}


module.exports = StudentController;