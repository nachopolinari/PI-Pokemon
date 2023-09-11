const  searchType  = require('../controllers/searchType');

const searchTypeHandler = async (req, res) => {
    const { type } = req.params;

    try {
        const pokemonType = await searchType(type);

        if (pokemonType) {
            return res.status(200).json(pokemonType);
        } else {
            return res.status(404).json({ msg: `Pokemon type ${type} not found` });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = searchTypeHandler;