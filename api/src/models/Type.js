const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de importar correctamente tu instancia de Sequelize
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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
    // pokemon: {
    //   type: Datatypes.ARRAY,
    //   allowNull:false,
    // }

  },
    {
      timestamps: false
    })
}

