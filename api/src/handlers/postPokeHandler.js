const postPokeHandler = (req, res) => {
  // Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
  // Toda la información debe ser recibida por body.
  // Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
  const {
    name,
    img,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  } = req.body

  res.status(200).send(`NIY: Esta ruta crea/postea un pokemon con estos datos:
  
    name:${name},
    img:${img},
    life:${life},
    attack:${attack},
    defense:${defense},
    speed:${speed},
    height:${height},
    weight:${weight},
   `)
};
module.exports = postPokeHandler;