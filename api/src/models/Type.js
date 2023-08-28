const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de importar correctamente tu instancia de Sequelize

const Type = sequelize.define('Type', {
  // Define las propiedades del modelo Type
  name: {
    type: DataTypes.STRING, // Tipo de dato: Cadena de texto
    allowNull: false, // No se permite un valor nulo
  },
  // Más propiedades si es necesario
});

module.exports = Type;