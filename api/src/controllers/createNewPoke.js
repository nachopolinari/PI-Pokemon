const { Pokemon, Type } = require('../db');

const createNewPoke = async (name, img, life, attack, defense, speed, height, weight, types) => {
    try {
        // Crea un nuevo registro de Pokémon en la base de datos con los datos proporcionados.
        const newPoke = await Pokemon.create({
            name,
            img,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            types
        });

        // Asociar los tipos al Pokémon creado
        if (types && types.length > 0) {
            // Busca los registros de tipos correspondientes a los nombres proporcionados.
            const typeInstances = await Type.findAll({
                where: { name: types },
            });

            // Asocia los tipos encontrados al Pokémon recién creado.
            await newPoke.addTypes(typeInstances);
        }

        // Retorna el nuevo Pokémon creado.
        return newPoke;
    } catch (error) {
        // En caso de un error durante la creación del Pokémon, se lanza una excepción con un mensaje descriptivo.
        throw new Error('Error creating the Pokémon');
    }
};

module.exports = { createNewPoke };
