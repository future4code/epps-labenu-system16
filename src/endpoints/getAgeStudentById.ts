import {Request, Response} from 'express';
import connection from '../connection';
// import { selectAgeById } from '../data/selectAgeById';

export async function getAgeStudentById (
    req: Request, 
    res: Response
    ): Promise<any> {

    let errorCode = 400;

    try{
        const id  = req.params.id

        const result = await connection.raw(`
            SELECT ROUND(DATEDIFF(CURDATE(), data_nasc)/365) as idade
            FROM estudante
            WHERE id = ${id}
        `)

        res.status(200).send({estudante: result[0][0]})
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
}