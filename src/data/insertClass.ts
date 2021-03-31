import connection from "../connection";

export async function insertClass(
    nome: string,
    dataInicio: string,
    dataFinal: string,
    modulo: number
): Promise<void> {

    const id = Math.floor(Math.random() * 10)

    await connection("turma")
        .insert({
            id,
            nome,
            data_inicio: dataInicio,
            data_final: dataFinal,
            modulo
        })
}
