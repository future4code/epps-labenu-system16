import { Request, Response } from "express"
import connection from "../connection"

export const createClass = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        type Class = {
            nome: string,
            dataInicio: Date,
            dataFinal: Date,
            modulo: number
        }

        const { nome, dataInicio, dataFinal, modulo } = req.body as Class

        const result = await connection("turma")
            .insert(
                {
                    id: Math.floor(Math.random() * 10),
                    nome,
                    data_inicio: dataInicio,
                    data_final: dataFinal,
                    modulo
                }
            )

        res.status(201).send(result)


    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}