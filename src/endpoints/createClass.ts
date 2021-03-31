import moment from "moment"
import { Request, Response } from "express"
import { insertClass } from "../data/insertClass"

export const createClass = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        type Class = {
            nome: string,
            inicio: string,
            final: string,
            modulo: number
        }

        let { nome, inicio, final, modulo } = req.body as Class

        if (!nome || !inicio || !final) {
            throw new Error("Todos os campos obrigatorios!");
        }

        // if (isNaN(modulo) || modulo === undefined) {
        //     throw new Error(`Modulo inválido.`);
        // }

        if (modulo > 7 || modulo < 0) {
            throw new Error(`Modulo ${modulo} inexistente!`);
        }

        const id = Math.floor(Date.now() / 1000)

        await insertClass(
            id,
            nome,
            moment(inicio, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            moment(final, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            modulo
        )

        res.status(201).send({ message: "Turma criada com sucesso!", id: id })


    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}