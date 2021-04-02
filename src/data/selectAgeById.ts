// import connection from "../connection";

// export const selectAgeById = async (id: number): Promise<any> =>{
//     const age = await connection.raw(`
//         SELECT ROUND(DATEDIFF(CURDATE(), data_nasc)/365) as idade
// FROM estudante
// WHERE id = ${id}
// //     `)

//     return age[0][0]

// }