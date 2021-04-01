import connection from "../connection";


export async function insertExpertise(
    id: number,
    nome: string
    ): Promise<any> {

        await connection("especialidade")
        .insert({
            id,
            nome
        })
    
}