const  getPokeByID  = require('../controllers/getPokeByID')

const getPokeByIdHandler = async (req, res) => {

    // Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
    // El pokemon es recibido por parámetro (ID).
    // Tiene que incluir los datos del tipo de pokemon al que está asociado.
    // Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
    const { id } = req.params;

    const source = isNaN(id) ? "bdd" : "api" //flag que me sirve para identificar si id es numerico y buscará en API o si es alfa-numerico y buscará en BDD

    try {
        const pokeById = await getPokeByID(id, source);
        res.status(200).json(pokeById);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }


};
module.exports = getPokeByIdHandler;