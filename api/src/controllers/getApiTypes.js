const axios = require('axios');
const { Type } = require('../db');
const { API_POKEMON_TYPE } = require('../utils/urls');

// Función para obtener y guardar tipos desde la API
const getApiTypes = async () => {
    try {
        // Hacer una solicitud a la API Pokémon para obtener los tipos
        const apiResponse = await axios.get(API_POKEMON_TYPE);
        const typesData = apiResponse.data.results;

        // Extraer los nombres de los tipos
        const typeNames = typesData.map(elem => elem.name);

        // Guardar los tipos en la base de datos si no existen
        for (const typeName of typeNames) {
            await Type.findOrCreate({
                where: { name: typeName },
            });
        }
    } catch (error) {
        throw new Error('Error al buscar o guardar types from API');
    }
};


module.exports = {
    getApiTypes
}