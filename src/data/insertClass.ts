import connection from "../connection";

export async function insertClass(
    id: number,
    nome: string,
    dataInicio: string,
    dataFinal: string,
    modulo: number
): Promise<void> {    

    await connection("turma")
        .insert({
            id,
            nome,
            data_inicio: dataInicio,
            data_final: dataFinal,
            modulo
        })
}
