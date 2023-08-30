const { Router } = require('express');
const getPokeHandler = require('../handlers/getPokeHandler')
const getPokeByIdHandler = require('../handlers/getPokeByIdHandler')
const postPokeHandler = require('../handlers/postPokeHandler')

const getPokeTypeHandler = require('../handlers/getPokeTypeHandler')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

// Ruta para obtener los primeros 60 Pokémon
//   GET | /pokemons
// Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
router.get('/pokemons', getPokeHandler);

// 📍 GET | /pokemons/:idPokemon
// Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.

router.get('/pokemons/:id', getPokeByIdHandler);

// 📍 POST | /pokemons
// Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
router.post('/postPokemons', postPokeHandler);



// Ruta para obtener los tipos de Pokémon
// 📍 GET | /types
// Obtiene un arreglo con todos los tipos de pokemones.

router.get('/pokemonsTypes', getPokeTypeHandler);



module.exports = router;
