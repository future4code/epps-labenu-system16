import app from "./app"
import { addStudent } from "./endpoints/addStudent"
import { createClass } from "./endpoints/createClass"
import { createExpertise } from "./endpoints/createExpertise"
import { createHobby } from "./endpoints/createHobby"
import { createStudent } from "./endpoints/createStudent"
import { createTeacher } from "./endpoints/createTeacher"

app.post("/criarturma", createClass)
app.post("/cadastroaluno", createStudent)
app.post("/cadastrodocente", createTeacher)
app.post("/cadastropassatempo", createHobby)
app.post("/cadastroespecialidade", createExpertise)
app.put("/adicionaraluno", addStudent)