const getAllPoke = require('../controllers/getAllPoke')
const { Pokemon } = require('../db');
const { API_POKEMON_NAME_OR_ID } = require('../utils/urls');
const axios = require('axios'); // Asegúrate de importar axios si aún no lo has hecho

const getPokeByName = async (name) => {

    try {
        const pokemons = await getAllPoke();
        const value = name.toLowerCase();
        const search = pokemons.filter(elem => elem.name.toLowerCase() === value);

        if (search.length >= 1) {
            return search; // Devuelve los resultados encontrados
        } else {
            // Lanza un Error en lugar de enviar una respuesta, para que sea manejado en el middleware de error
            throw new Error(`Pokemon ${name} not found`);
        }

    } catch (error) {
        throw new Error(`Error al buscar el Pokémon:  ${error.message}`);
    }

};

module.exports = getPokeByName;
