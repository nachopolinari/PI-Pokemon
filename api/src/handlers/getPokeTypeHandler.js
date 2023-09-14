// Controlador para obtener y actualizar los tipos de Pokémon.
const { getApiTypes } = require('../controllers/getApiTypes');
const { getAllTypes } = require('../controllers/getAllTypes');

const getPokeTypeHandler = async (req, res) => {
    try {
        // Obtener los tipos desde la base de datos
        const allTypes = await getAllTypes();

        // Si no hay tipos en la base de datos, obtenerlos desde la API y guardarlos
        if (allTypes.length === 0) {
            await getApiTypes();
        }

        // Obtener los tipos actualizados desde la base de datos
        const updatedTypes = await getAllTypes();

        // Enviar la lista de tipos como respuesta
        res.status(200).json(updatedTypes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getPokeTypeHandler;
