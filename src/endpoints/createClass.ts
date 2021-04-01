import moment from "moment"
import { Request, Response } from "express"
import {classe, MODALIDADE_CLASSE}from "../types"
import { insertClass } from "../data/insertClass"

export const createClass = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        let { nome, inicio, final, modulo, modalidade} = req.body as classe

        if (!nome || !inicio || !final) {
            errorCode= 522
            throw new Error("Todos os campos obrigatorios!");
        }

        // if (isNaN(modulo)) {
        //     throw new Error(`Modulo inválido.`);
        // }

        if (modulo > 7 || modulo < 0) {
            errorCode= 522
            throw new Error(`Modulo ${modulo} inexistente!`);
        }

        if(!modalidade){
            modalidade = MODALIDADE_CLASSE.INTEGRAL
        }

        if(modalidade.toLowerCase() === MODALIDADE_CLASSE.NOTURNO){
            nome = `${nome}-na-night`
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