const { DataTypes } = require('sequelize');

// Exportamos una función que define el modelo y le inyecta la conexión a sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo 'pokemon'.
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    life: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    attack: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    defense: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    speed: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    height: {
      type: DataTypes.FLOAT,
    },
    weight: {
      type: DataTypes.FLOAT,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    timestamps: false, // Desactivamos los timestamps (created_at y updated_at) en este modelo.
  });
};
