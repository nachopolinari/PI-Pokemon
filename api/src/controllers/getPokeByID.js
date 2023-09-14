const axios = require('axios');
const { Pokemon } = require('../db');
const { API_POKEMON_NAME_OR_ID } = require('../utils/urls');

// Esta función obtiene detalles de un Pokémon por su ID, ya sea de la API o de la base de datos local.
const getPokeByID = async (id) => {
    let poke; // Variable para almacenar los detalles del Pokémon.

    try {
        // Realiza una solicitud HTTP a la API de Pokémon para obtener los detalles del Pokémon por su ID.
        const apiResponse = await axios.get(`${API_POKEMON_NAME_OR_ID}${id}`);

        // Construye un objeto 'poke' con los detalles del Pokémon obtenidos de la API.
        poke = {
            id: apiResponse.data.id,
            name: apiResponse.data.name,
            img: apiResponse.data.sprites.other.home.front_default,
            life: apiResponse.data.stats[0].base_stat,
            attack: apiResponse.data.stats[1].base_stat,
            defense: apiResponse.data.stats[2].base_stat,
            speed: apiResponse.data.stats[5].base_stat,
            height: apiResponse.data.height / 10,
            weight: apiResponse.data.weight / 10,
            types: apiResponse.data.types.map(t => t.type.name),
            created: false
        };

        // Devuelve los detalles del Pokémon.
        return poke;
    } catch (error) {
        // Si no se encuentra el Pokémon en la API, lanza un Error.
        throw new Error(`Error al obtener el Pokémon: ID ${id} not found`);
    }
}

module.exports = getPokeByID;
