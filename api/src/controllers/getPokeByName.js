const getAllPoke = require('../controllers/getAllPoke');


// Esta función busca un Pokémon por su nombre en la base de datos local.
const getPokeByName = async (name) => {
    try {
        // Obtener todos los Pokémon de la base de datos.
        const pokemons = await getAllPoke();

        // Convertir el nombre a minúsculas para una búsqueda insensible a mayúsculas.
        const value = name.toLowerCase();

        // Filtrar los Pokémon cuyo nombre coincide con el nombre proporcionado.
        const search = pokemons.filter(elem => elem.name.toLowerCase() === value);

        // Si se encuentra al menos un Pokémon, devolver los resultados encontrados.
        if (search.length >= 1) {
            return search;
        } else {
            // Lanzar un Error en lugar de enviar una respuesta, para que sea manejado en el middleware de error.
            throw new Error(`Pokemon ${name} not found`);
        }
    } catch (error) {
        throw new Error(`Error al buscar el Pokémon: ${error.message}`);
    }
};

module.exports = getPokeByName;
