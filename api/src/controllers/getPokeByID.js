const axios = require('axios');
const { Pokemon } = require('../db');
const { API_POKEMON_NAME_OR_ID } = require('../utils/urls');

const getPokeByID = async (id, source) => {
    let poke;

    try {
        if (source === "api") {
            const apiResponse = await axios.get(`${API_POKEMON_NAME_OR_ID}${id}`);
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
        } else {
            poke = await Pokemon.findByPk(id);
        }
    
        return poke;
        
    } catch (error) {
        throw new Error(`Error al obtener el Pokémon: ID ${id} not found`);
    }

}

module.exports = getPokeByID;

