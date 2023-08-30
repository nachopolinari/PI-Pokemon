const getPokeTypeHandler = (req, res) => {
    // Obtiene un arreglo con todos los tipos de pokemones.
    // En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
    // Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
    // Aquí podrías usar la URL API_POKEMON_TYPE desde urls.js para hacer una solicitud a la API
    // y devolver la información de los tipos de Pokémon en la respuesta
    res.status(200).send('NIY: Esta ruta obtiene un arreglo con todos los tipos de pokemones')
};
module.exports = getPokeTypeHandler;