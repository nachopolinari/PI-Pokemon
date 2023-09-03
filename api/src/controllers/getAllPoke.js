const { API_POKEMON } = require('../utils/urls');
const { Pokemon } = require('../db');
const axios = require('axios');
const { getDBPoke } = require('../controllers/getDBPoke');
const { getApiPoke } = require('../controllers/getApiPoke.js')

const getAllPoke = async () => {

    try {
        const dataBasePoke = await getDBPoke();
        const apiPoke = await getApiPoke();

        const allPoke = [...dataBasePoke, ...apiPoke];
        return allPoke;

    } catch (error) {

        throw new Error(`Error al obtener la lista de Pokémon:  ${error.message}`);
    }


};

module.exports = getAllPoke;

