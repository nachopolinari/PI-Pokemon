const {createNewPoke} =require('../controllers/createNewPoke')
const postPokeHandler = async (req, res) => {
  // Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
  // Toda la información debe ser recibida por body.
  // Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
  try {
    const { name, img, life, attack, defense, speed, height, weight } = req.body
    const newPoke = await createNewPoke(name, img, life, attack, defense, speed, height, weight);
    res.status(201).json(newPoke);

    //si hay un error en newPoke va a ir al catch
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

  // res.status(200).send(`NIY: Esta ruta crea/postea un pokemon con estos datos:
  
  //   name:${name},
  //   img:${img},
  //   life:${life},
  //   attack:${attack},
  //   defense:${defense},
  //   speed:${speed},
  //   height:${height},
  //   weight:${weight},
  //  `)
};
module.exports = postPokeHandler;