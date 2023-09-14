// Controlador para obtener Pokémon por nombre o todos los Pokémon.
const getAllPoke = require('../controllers/getAllPoke');
const getPokeByName = require('../controllers/getPokeByName');

const getPokeHandler = async (req, res) => {
    try {
        const { name } = req.query;

        // Verificar si se proporciona un nombre en la consulta.
        // Si se proporciona un nombre, llamamos a getPokeByName para buscar un Pokémon específico.
        // Si no se proporciona un nombre, llamamos a getAllPoke para obtener todos los Pokémon.
        const results = name ?
            await getPokeByName(name) :
            await getAllPoke();

        // Enviar una respuesta JSON con los resultados obtenidos.
        res.status(200).json(results);
    } catch (error) {
        // Manejar errores y enviar una respuesta de error con el mensaje de error.
        res.status(400).json({ error: error.message });
    }
};

module.exports = getPokeHandler;
