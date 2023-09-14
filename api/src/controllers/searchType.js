const getAllPoke = require('../controllers/getAllPoke');

// Esta función filtra los Pokémon por tipo y retorna un array de Pokémon que incluyen el tipo especificado.
const searchType = async (type) => {
    try {
        // Obtener todos los Pokémon de la base de datos.
        const pokemons = await getAllPoke();

        // Filtrar los Pokémon cuyos tipos incluyan el tipo especificado.
        const typesFilter = pokemons.filter(poke =>
            poke.types.includes(type.toLowerCase())
        );

        return typesFilter;
    } catch (error) {
        throw new Error(`Error en la función searchType: ${error.message}`);
    }
};

module.exports = searchType;
