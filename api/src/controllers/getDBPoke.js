const { Pokemon } = require('../db');

const getDBPoke = async () => {
    return await Pokemon.findAll();
};

module.exports = {
    getDBPoke
};
