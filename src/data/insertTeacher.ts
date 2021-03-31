import connection from "../connection";

export default async function insertTeacher(
    id: number, 
    nome: string, 
    email: string, 
    dataNasc: string,
    turmaId: number
) : Promise<void>

{
    await connection("docente")
        .insert({ id, nome, email , data_nasc: dataNasc, turma_id: turmaId })
}