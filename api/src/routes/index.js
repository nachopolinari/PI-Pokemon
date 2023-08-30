const { Router } = require('express');
const urls = require('../utils/urls');
const {axios}=require('axios')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Ruta para obtener los primeros 60 Pokémon
//   GET | /pokemons
// Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
router.get('/pokemons', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON desde urls.js para hacer una solicitud a la API
    // y devolver la información de los primeros 60 Pokémon en la respuesta
    res.status(200).send('NIY: Esta ruta trae 60 pokemons')
    // Ejemplo:
    //  axios.get(urls.API_POKEMON)
    //    .then(response => res.json(response.data))
    //    .catch(error => res.status(500).json({ error: 'Error fetching Pokémon data' }));
      });
// 📍 GET | /pokemons/:idPokemon
// Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// El pokemon es recibido por parámetro (ID).
// Tiene que incluir los datos del tipo de pokemon al que está asociado.
// Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
router.get('/pokemonsById/:id',(req,res)=>{
res.status(200).send('NIY: Esta ruta busca un pokemon determinado por ID')
});

  // 📍 POST | /pokemons
  // Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
  // Toda la información debe ser recibida por body.
  // Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
  router.post('/postPokemons',(req,res)=>{
    res.status(200).send ('NIY: Esta ruta crea/postea un pokemon')
  });
  
  
  
  // Ruta para obtener los tipos de Pokémon
  // 📍 GET | /types
  // Obtiene un arreglo con todos los tipos de pokemones.
  // En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
  // Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
  router.get('/pokemonsTypes', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON_TYPE desde urls.js para hacer una solicitud a la API
    // y devolver la información de los tipos de Pokémon en la respuesta
    res.status(200).send('NIY: Esta ruta obtiene un arreglo con todos los tipos de pokemones')
  });
  
  // Ruta para obtener detalles de un Pokémon por nombre o ID
  // 📍 GET | /pokemons/name?="..."
  // Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
  // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
  // Si no existe el pokemon, debe mostrar un mensaje adecuado.
  // Debe buscar tanto los de la API como los de la base de datos.
  router.get('/pokemons/:nameOrId', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON_NAME_OR_ID desde urls.js para construir la URL completa
    // usando el parámetro :nameOrId de la URL y hacer una solicitud a la API
  res.status(200).send('NIY: Esta ruta busca un pokemon por name or ID')
  });
  
  module.exports = router;
  