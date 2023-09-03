const { Pokemon, Type } = require('../db');

const createNewPoke = async (name, img, life, attack, defense, speed, height, weight, types) => {
    try {
        const newPoke = await Pokemon.create({
            name,
            img,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
        });

        // Asociar los tipos al Pokémon creado
        if (types && types.length > 0) {
            const typeInstances = await Type.findAll({
                where: { name: types },
            });

            await newPoke.addTypes(typeInstances);
        }

        return newPoke;
    } catch (error) {
        throw new Error('Error creating the Pokémon: ' + error.message);
    }
};

module.exports = { createNewPoke };


// const { Pokemon } = require('../db')

// const createNewPoke = async (name, img, life, attack, defense, speed, height, weight, types) => {
//     const newPoke = await Pokemon.create({
//         name, // antes estaba name: name
//         img,
//         life,
//         attack,
//         defense,
//         speed,
//         height,
//         weight,
//         types
//     })

//     return newPoke;
// }

// module.exports = { createNewPoke };