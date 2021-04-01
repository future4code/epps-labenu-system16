import { Request, Response } from "express"
import { professor } from "../types"
import moment from "moment"
import insertTeacher from "../data/insertTeacher"

export async function createTeacher(
    req: Request,
    res: Response
): Promise<any> {

    let errorCode = 400;

    try {
        const { nome, email, dataNasc, turmaId } = req.body as professor

        if (!nome || !email || !dataNasc || !turmaId) {
            throw new Error("Todos os campos obrigatorios!");
        }

        if (!email.includes("@")) {
            throw new Error ("Digite um e-mail válido.");            
        }

        // const time: number = moment().unix() - moment(dataNasc, 'DD/MM/YYYY').unix();

        // const idade: number = time / 1000 / 60 / 60 / 24;

        // console.log(idade)

        const id = Math.floor(Date.now() / 1000)

        await insertTeacher(id, nome, email, moment(dataNasc, 'DD/MM/YYYY').format('YYYY-MM-DD'), turmaId)

            res.status(201).send("Professor cadastrado com sucesso!")

        
    } catch (error) {
        res.status(errorCode).send(error.message)
    }

}