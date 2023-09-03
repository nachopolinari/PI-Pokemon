const { Router } = require('express');
const getPokeHandler = require('../handlers/getPokeHandler')
const getPokeByIdHandler = require('../handlers/getPokeByIdHandler')
const postPokeHandler = require('../handlers/postPokeHandler')
const getPokeTypeHandler = require('../handlers/getPokeTypeHandler');
const searchTypeHandler = require('../handlers/searchTypeHandler');
const validate = require('../helpers/validate')

const router = Router();

// Configurar los routers

// router.get('/', async (req, res) => {
//     try{
//         const allTypes = await types();
//         res.status(200).send(allTypes);
//     }
//     catch(err){
//         console.log(err);
//     }
// }) nota: "cuando este en / que traiga todos los types y los guarde en BDD"

//📍 GET | /pokemons : Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
router.get('/pokemons', getPokeHandler);

// 📍 GET | /pokemons/:idPokemon : obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.

router.get('/pokemons/:id', getPokeByIdHandler);

// 📍 POST | /pokemons : recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
router.post('/pokemonsPost', validate, postPokeHandler);

// 📍 GET | /types : Obtiene un arreglo con todos los tipos de pokemones.
router.get('/pokemonsTypes', getPokeTypeHandler);

router.get('/pokemonsTypes/:type', searchTypeHandler);

module.exports = router;
