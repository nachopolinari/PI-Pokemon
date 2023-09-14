const { getDBPoke } = require('../controllers/getDBPoke');
const { getApiPoke } = require('../controllers/getApiPoke.js')

const getAllPoke = async () => {
    try {
        // Obtiene la lista de Pokémon almacenados en la base de datos local.
        const dataBasePoke = await getDBPoke(true);

        // Obtiene la lista de Pokémon desde una fuente externa, posiblemente una API.
        const apiPoke = await getApiPoke();

        // Combina las listas de Pokémon obtenidas de la base de datos y la fuente externa.
        const allPoke = [...dataBasePoke, ...apiPoke];

        // Retorna la lista completa de Pokémon que incluye tanto los de la base de datos como los de la fuente externa.
        return allPoke;
    } catch (error) {
        // En caso de un error durante la obtención de la lista, se lanza una excepción con un mensaje descriptivo.
        throw new Error(`Error al obtener la lista de Pokémon:  ${error.message}`);
    }
};

module.exports = getAllPoke;
