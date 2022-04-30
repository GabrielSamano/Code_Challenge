
class StudentService{
    static getAllStudents(students) {
        return students;
    }

    static getStudentssEmailwithCertification(students, certificate) {
        const Certificationfilter = students.filter(
            (e) => e.haveCertification === certificate
        );
        const StudentCertificationEmail = Certificationfilter.map(
            (e) => e.email
        );
        return StudentCertificationEmail;
    }

    static getStudentsWithCredits(students, credits) {
        const studentCreditsfilter = students.filter((e) => e.credits > credits);
        return studentCreditsfilter;
    }
}


module.exports = StudentService;