const StudentController = require("./controllers/StudentsController")
const express = require("express");
const { request, response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Student Api Welcome"});
});

app.get("/v1/students", (request, response) => {
    const NewStudent = StudentController.getAllStudent();
    response.json(NewStudent);
});

app.get("/v1/students/emails/havecertification", (request, response) => {
    const emails = StudentController.getStudentsEmailwithCertification(true);
    response.json({ havecertification: true, Emails: emails });
});

app.get("/v1/students/credits/500", (request, response) => {    
    const StudentsCredits = StudentController.getStudentsWithCredits(500);
    response.json({ HighCredits: 500, NewStudent: StudentsCredits });
});


app.listen(port, () => {
    console.log(`Student API in localhost:${port}`);
});