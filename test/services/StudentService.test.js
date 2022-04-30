const StudentService = require("./../../lib/services/StudentService")

describe("Test de StudentService", () => {
    test("1 Leer el archivo", () => {
        const lista = [{ name: "Gabriel" }];
        const students = StudentService.getAllStudents(lista);
        expect(students[0].name).toBe("Gabriel");
    });

    test("2 regresar todo los email de los partners con certificado", () => {
        const lista = [{ haveCertification: true, email: "Todd@visualpartnership.xyz" }];
        const students = StudentService.getStudentssEmailwithCertification(lista,true);
        expect(students.length).toBe(1);
    });

    test("3 Creditos mayores a 500", () => {
        const lista = [{ credits: 499 }, { credits: 501 }];
        const students = StudentService.getStudentsWithCredits(lista,500);
        expect(students.length).toBe(1);
    });
});