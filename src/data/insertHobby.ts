import connection from "../connection";

export async function insertHobby(
    id: number,
    nome: string
    ): Promise<any> {
    
    await connection("passatempo")
    .insert({
        id,
        nome
    })
}