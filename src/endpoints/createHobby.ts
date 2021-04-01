import { Request, Response } from "express";
import { insertHobby } from "../data/insertHobby";


export async function createHobby(
    req: Request,
    res: Response
): Promise<any> {

    let errorCode = 400;

    try {
        const { nome } = req.body 

        if (!nome) {
            throw new Error("Digite um passatempo válido.");            
        }

        const id = Math.floor(Date.now() / 10000)

        await insertHobby(id, nome);

        res.status(201).send("Passatempo cadastrado com sucesso.")

    } catch (error) {
        res.status(errorCode).send(error.message);
    }
    
}