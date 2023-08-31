const axios = require('axios');
const { Pokemon } = require('../db');
const {API_POKEMON_NAME_OR_ID} = require('../utils/urls');

const getPokeByID = async (id, source) => {
    const poke = source === "api" ?
        (await axios.get(`${API_POKEMON_NAME_OR_ID}${id}`)).data :
        await Pokemon.findByPk(id);
    return poke;
}

module.exports = getPokeByID;

