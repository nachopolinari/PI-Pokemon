const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    created: {//esta marca me servira para filtrar los creados por mi de los que vienen de la api ext
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

  }, {
    timestamps: false
  });
};
