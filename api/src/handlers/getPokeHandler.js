const getPokeHandler = (req, res) => {
// Ruta para obtener detalles de un Pokémon por nombre o ID
// 📍 GET | /pokemons/name?="..."
    // Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe el pokemon, debe mostrar un mensaje adecuado.
    // Debe buscar tanto los de la API como los de la base de datos.
    // Aquí podrías usar la URL API_POKEMON_NAME_OR_ID desde urls.js para construir la URL completa
    // usando el parámetro :nameOrId de la URL y hacer una solicitud a la API
    const { name } = req.query;
    if (name) res.status(200).send(`NIY: Esta ruta busca un pokemon por name = ${name}`)



    //Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
    // Aquí podrías usar la URL API_POKEMON desde urls.js para hacer una solicitud a la API
    // y devolver la información de los primeros 60 Pokémon en la respuesta
    else res.status(200).send('NIY: Esta ruta trae 60 pokemons')
    // Ejemplo:
    //  axios.get(urls.API_POKEMON)
    //    .then(response => res.json(response.data))
    //    .catch(error => res.status(500).json({ error: 'Error fetching Pokémon data' }));
};
module.exports = getPokeHandler;