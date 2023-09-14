const { Router } = require('express');
const getPokeHandler = require('../handlers/getPokeHandler');
const getPokeByIdHandler = require('../handlers/getPokeByIdHandler');
const postPokeHandler = require('../handlers/postPokeHandler');
const getPokeTypeHandler = require('../handlers/getPokeTypeHandler');
const searchTypeHandler = require('../handlers/searchTypeHandler');
const validate = require('../helpers/validate');

const router = Router();

// Ruta para obtener todos los Pokémon
// Ruta para obtener los Pokémon que coinciden con el nombre.
//📍 GET | /pokemons/name?="..."
router.get('/pokemons', getPokeHandler);

// Ruta para obtener un arreglo de objetos, donde cada objeto es un Pokémon con su información.
// 📍 GET | /pokemons
router.get('/pokemons/:id', getPokeByIdHandler);

// Ruta para crear un Pokémon y relacionarlo con sus tipos solicitados.
//  📍 POST | /pokemons
router.post('/pokemonsPost', validate, postPokeHandler);

// Ruta para obtener un arreglo con todos los tipos de Pokémon.
//   📍GET | /pokemonsTypes
router.get('/pokemonsTypes', getPokeTypeHandler);

// Ruta para buscar Pokémon por tipo.
//    📍GET | /pokemonsTypes/:type
router.get('/pokemonsTypes/:type', searchTypeHandler);

module.exports = router;
