import { Request, Response } from "express";
import { insertExpertise } from "../data/insertExpertise";


export async function createExpertise(
    req: Request,
    res: Response
):  Promise<any> {

    let errorCode = 400;

    try {
        const { nome } = req.body

        if (!nome) {
            throw new Error("Digite uma especialidade válida.");
        }

        const id = Math.floor(Date.now() / 10000)

        await insertExpertise(id, nome);

        res.status(201).send("Especialidade criada com sucesso.")

    } catch (error) {
        res.status(errorCode).send(error.message);
    }
    
}