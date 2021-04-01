export type aluno = {
    // id: number,
    nome: string,
    email: string,
    dataNasc: Date,
    turmaId: number
}

export type professor = {
    id: number,
    nome: string,
    email: string,
    dataNasc: Date,
    turmaId: number
}

export type Class = {
    nome: string,
    inicio: string,
    final: string,
    modulo: number
}