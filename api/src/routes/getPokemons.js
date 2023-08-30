const { Router } = require('express');
const urls = require('../utils/urls');

const getPokemons = Router();

getPokemons.get('/', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON desde urls.js para hacer una solicitud a la API
    // y devolver la información de los primeros 60 Pokémon en la respuesta
    res.status(200).send('Esta ruta trae 60 pokemons')
    // Ejemplo:
    //  axios.get(urls.API_POKEMON)
    //    .then(response => res.json(response.data))
    //    .catch(error => res.status(500).json({ error: 'Error fetching Pokémon data' }));
})

getPokemons.get('')

module.exports = getPokemons;