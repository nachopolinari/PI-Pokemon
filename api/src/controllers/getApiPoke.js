const axios = require('axios');
const { API_POKEMON } = require('../utils/urls');

const getApiPoke = async () => {
    // Hacer una solicitud a la API de Pokémon para obtener datos de Pokémon
    const apiResponse = await axios.get(API_POKEMON);

    // Descomponer la información de la API para obtener una lista de Pokémon
    const apiPokeInfo = apiResponse.data.results;

    // Hacer solicitudes individuales a las URLs de cada Pokémon en la lista
    const apiPokeInfoURL = await Promise.all(apiPokeInfo.map(elem => axios.get(elem.url)));

    // Mapear la información para obtener los datos relevantes de cada Pokémon
    const apiPoke = apiPokeInfoURL.map(elem => {
        return {
            id: elem.data.id,
            name: elem.data.name,
            img: elem.data.sprites.other.home.front_default,
            life: elem.data.stats[0].base_stat,
            attack: elem.data.stats[1].base_stat,
            defense: elem.data.stats[2].base_stat,
            speed: elem.data.stats[5].base_stat,
            height: (elem.data.height) / 10, // Convertir de decímetros a metros
            weight: (elem.data.weight) / 10, // Convertir de decigramos a kilogramos
            types: elem.data.types.map(t => t.type.name),
            created: false // Indicar que estos Pokémon no fueron creados por el usuario
        };
    });

    // Retornar la lista de Pokémon con los datos obtenidos de la API
    return apiPoke;
};

module.exports = { getApiPoke };
