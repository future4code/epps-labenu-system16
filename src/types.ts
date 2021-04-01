export enum MODALIDADE_CLASSE{
    "INTEGRAL" = "integral",
    "NOTURNO" = "noturno"
}

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

export type classe = {
    nome: string,
    inicio: string,
    final: string,
    modulo: number,
    modalidade: MODALIDADE_CLASSE
}