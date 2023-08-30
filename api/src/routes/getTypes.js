const { Router } = require('express');
const urls = require('../utils/urls');

const getTypes = Router();

getTypes.get('/',(req, res) => {
    // Aquí podrías usar la URL API_POKEMON_TYPE desde urls.js para hacer una solicitud a la API
    // y devolver la información de los tipos de Pokémon en la respuesta
    res.status(200).send('Esta ruta busca un type de pokemon')
  });

module.exports = getTypes;