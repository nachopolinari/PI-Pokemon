// Controlador para crear un nuevo Pokémon y asociarlo con sus tipos.
const { createNewPoke } = require('../controllers/createNewPoke');

const postPokeHandler = async (req, res) => {
  const { name, img, life, attack, defense, speed, height, weight, types } = req.body;

  try {
    // Llama a la función para crear un nuevo Pokémon.
    const newPoke = await createNewPoke(name, img, life, attack, defense, speed, height, weight, types);
    res.status(201).json(newPoke);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postPokeHandler;
