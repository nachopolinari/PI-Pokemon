const getAllPoke = require('../controllers/getAllPoke')
const getPokeByName = require('../controllers/getPokeByName')
const getPokeHandler = async (req, res) => {

    try {
        const { name } = req.query;

        const results = name ?

            await getPokeByName(name) :

            await getAllPoke();

        res.status(200).json(results)

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = getPokeHandler;