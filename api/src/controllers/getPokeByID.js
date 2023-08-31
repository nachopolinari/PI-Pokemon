const axios = require('axios');
const { Pokemon } = require('../db');
const API_POKEMON_NAME_OR_ID = require('../utils/urls');

const getPokeByID = async (id, source) => {
    const poke = source === "api" ?
        (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data :
        await Pokemon.findByPk(id);
    return poke;
}

module.exports = getPokeByID;

//nota: reemplazar la dir con la constarte de url 