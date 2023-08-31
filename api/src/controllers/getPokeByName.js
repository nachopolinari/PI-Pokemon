const { Pokemon } = require('../db');
const getPokeByName = async (name) => {

    const dataBasePoke = await Pokemon.findAll({ where: { name: name } })
   

    return dataBasePoke

};
module.exports = getPokeByName; 