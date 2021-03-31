import connection from "../connection";

export default async function insertStudent(
    id: number, 
    nome: string, 
    email: string, 
    dataNasc: string,
    turmaId: number
) : Promise<void>

{
    await connection("estudante")
        .insert({ id, nome, email , data_nasc: dataNasc, turma_id: turmaId })
}