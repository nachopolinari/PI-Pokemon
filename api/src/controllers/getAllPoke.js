const { API_POKEMON } = require('../utils/urls');
const { Pokemon } = require('../db');
const axios = require('axios');
const { getDBPoke } = require('../controllers/getDBPoke');
const {getApiPoke}=require('../controllers/getApiPoke.js')

const getAllPoke = async () => {
    const dataBasePoke = await getDBPoke();
    const apiPoke = await getApiPoke();

    const result = [...dataBasePoke, ...apiPoke];
    return result;
};

module.exports = getAllPoke;

