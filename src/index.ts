import app from "./app"
import { createClass } from "./endpoints/createClass"

app.post("/criarturma", createClass)