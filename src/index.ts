import app from "./app"
import { createClass } from "./endpoints/createClass"
import { createStudent } from "./endpoints/createStudent"
import { createTeacher } from "./endpoints/createTeacher"

app.post("/criarturma", createClass)
app.post("/cadastroaluno", createStudent)
app.post("/cadastrodocente", createTeacher)