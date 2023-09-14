const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de importar correctamente tu instancia de Sequelize

// Exportamos una función que define el modelo y le inyecta la conexión a sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo 'type'.
  sequelize.define('type', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false, // Desactivamos los timestamps (created_at y updated_at) en este modelo.
  });
};
