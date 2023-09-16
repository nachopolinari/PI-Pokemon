const { Pokemon, Type } = require('../db');

const getDBPoke = async () => {
    try {
        const pokemons = await Pokemon.findAll({
            include: Type, // Esto asegura que los tipos se carguen junto con los Pokémon
        });
      
        return pokemons;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching Pokémon from the database');
    }
};

module.exports = {
    getDBPoke
};


