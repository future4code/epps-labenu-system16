import { Request, Response } from "express"
import { aluno } from "../types"
import moment from "moment"
import insertStudent from "../data/insertStudent"

export async function createStudent(
    req: Request,
    res: Response
): Promise<any> {

    let errorCode = 400

    try {
        const { nome, email, dataNasc, turmaId } = req.body as aluno

        if (!nome || !email || !dataNasc ) {
            throw new Error("Os campos nome, email e data de nascimento obrigatorios!");
        }

        if (!email.includes("@")) {
            throw new Error ("Digite um e-mail válido.");            
        }

        // const time: number = moment().unix() - moment(dataNasc, 'DD/MM/YYYY').unix();

        // const idade: number = time / 1000 / 60 / 60 / 24;

        // console.log(idade)

        const id = Math.floor(Date.now() / 1000)

        await insertStudent(id, nome, email, moment(dataNasc, 'DD/MM/YYYY').format('YYYY-MM-DD'), turmaId)

            res.status(201).send("Aluno cadastrado com sucesso!")

        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }

}