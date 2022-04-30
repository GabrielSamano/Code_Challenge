const StudentController = require("./../../lib/controllers/StudentsController")

describe("StudentsController", () => {
    test("1 Confirmar todos los miembros del archivo", () => {
        const studentsImagine = StudentController.getAllStudent();
        expect(studentsImagine[4].name).toBe("Phillips");
    });

    test("2 verificar los emails con certificacion", () => {
        const studentsImagine = StudentController.getStudentsEmailwithCertification(true);
        expect(studentsImagine[8]).toBe("Mcpherson@visualpartnership.xyz");
    });

    test("3 Verificar las personas con mayor numero de creditos", () => {
        const studentsImagine = StudentController.getStudentsWithCredits(500);
        expect(studentsImagine[10].name).toBe("Obrien");
    });
});