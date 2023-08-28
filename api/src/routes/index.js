const { Router } = require('express');
const urls = require('./urls.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// Ruta para obtener los primeros 60 Pokémon
router.get('/pokemons', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON desde urls.js para hacer una solicitud a la API
    // y devolver la información de los primeros 60 Pokémon en la respuesta
    // Ejemplo:
     axios.get(urls.API_POKEMON)
       .then(response => res.json(response.data))
       .catch(error => res.status(500).json({ error: 'Error fetching Pokémon data' }));
  });
  
  // Ruta para obtener los tipos de Pokémon
  router.get('/pokemon-types', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON_TYPE desde urls.js para hacer una solicitud a la API
    // y devolver la información de los tipos de Pokémon en la respuesta
  });
  
  // Ruta para obtener detalles de un Pokémon por nombre o ID
  router.get('/pokemon/:nameOrId', (req, res) => {
    // Aquí podrías usar la URL API_POKEMON_NAME_OR_ID desde urls.js para construir la URL completa
    // usando el parámetro :nameOrId de la URL y hacer una solicitud a la API
  });

module.exports = router;
