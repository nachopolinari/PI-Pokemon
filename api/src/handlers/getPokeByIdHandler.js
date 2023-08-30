const getPokeByIdHandler = (req, res) => {

    // Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
    // El pokemon es recibido por parámetro (ID).
    // Tiene que incluir los datos del tipo de pokemon al que está asociado.
    // Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

    const { id } = req.params

    res.status(200).send(`NIY: Esta ruta busca un pokemon determinado por ID: ${id}`)
};
module.exports = getPokeByIdHandler;