const { Type } = require('../db');


const getAllTypes = async () => {
    try {
        const allTypes = await Type.findAll();
        return allTypes;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching types from the database');
    }
};

module.exports = { getAllTypes };