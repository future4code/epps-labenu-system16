import {Request, Response} from "express"
import connection from "../connection"

export const addStudent = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        const {estudanteId, turmaId} = req.body

        await connection("estudante_turma")
            .insert({
                estudante_id: estudanteId,
                turma_id: turmaId
            })

        res.status(201).send("Sucesso")  
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }

}