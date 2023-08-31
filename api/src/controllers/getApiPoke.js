const axios = require('axios');
const { API_POKEMON } = require('../utils/urls');

const getApiPoke = async () => {
    // Traer todo de la API
    const apiResponse = await axios.get(API_POKEMON);
    //Desmenuzar la Info de la API
    const apiPokeInfo = apiResponse.data.results;// el data es por axios y el results es por la api de Pokemon
    //Consigo las URL de los pokemons
    const apiPokeInfoURL = await Promise.all(apiPokeInfo.map(elem => axios.get(elem.url)));//Al usar Promise.all(), se espera a que todas las promesas generadas por el mapeo de las URLs se resuelvan y se obtiene un array con los resultados una vez que todas las promesas estén completas.

    //mapeo final para filtrar la info que no me sirve
    const apiPoke = apiPokeInfoURL.map(elem => {
        return {
            id: elem.data.id,
            name: elem.data.name,
            img: elem.data.sprites.other.home.front_default,
            life: elem.data.stats[0].base_stat,
            attack: elem.data.stats[1].base_stat,
            defense: elem.data.stats[2].base_stat,
            speed: elem.data.stats[5].base_stat,
            height: elem.data.height,
            weight: elem.data.weight,
            types: elem.data.types.map(t => t.type.name)
        };
    });
    return apiPoke;
};

module.exports = {
    getApiPoke
};
