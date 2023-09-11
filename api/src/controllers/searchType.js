//esta funciona va a:
//1- buscar todos los pokemons que tengamos en la BDD (los 60+los creados) 
//2- los va a filtrar por type (devuelve un array de pokemones)
//3- itera cada poke.types con el forEach si el elem iterado incluye el type del argumento (true) retorna check true y el filter lo va a ir agregando al array llamado "typesFilter"
//4- finalmente retorna typesFilter

const getAllPoke = require('../controllers/getAllPoke');

const searchType = async (type) => {
    try {
        const pokemons = await getAllPoke();
        const typesFilter = pokemons.filter(poke =>
            poke.types.includes(type.toLowerCase())
        );

        return typesFilter;
    } catch (error) {
        throw new Error(`Error en la función searchType: ${error.message}`);
    }
};

module.exports = searchType;
