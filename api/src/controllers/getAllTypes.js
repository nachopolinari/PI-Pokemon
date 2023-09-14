const { Type } = require('../db');

const getAllTypes = async () => {
    try {
        // Realiza una consulta a la base de datos para obtener todos los tipos de Pokémon.
        const allTypes = await Type.findAll();

        // Retorna la lista de tipos obtenida desde la base de datos.
        return allTypes;
    } catch (error) {
        // En caso de un error, registra el error en la consola y lanza una excepción.
        console.error(error);
        throw new Error('Error fetching types from the database');
    }
};

module.exports = { getAllTypes };

// const { Type } = require('../db');


// const getAllTypes = async () => {
//     try {
//         const allTypes = await Type.findAll();
//         return allTypes;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error fetching types from the database');
//     }
// };

// module.exports = { getAllTypes };