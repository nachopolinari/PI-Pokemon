const  getPokeByID  = require('../controllers/getPokeByID')

const getPokeByIdHandler = async (req, res) => {

    // Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
    // El pokemon es recibido por parámetro (ID).
    // Tiene que incluir los datos del tipo de pokemon al que está asociado.
    // Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
    const { id } = req.params;

    
    try {
        const pokeById = await getPokeByID(id);
        res.status(200).json(pokeById);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }


};
module.exports = getPokeByIdHandler;