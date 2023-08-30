const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db'); // Asegúrate de importar correctamente tu instancia de Sequelize
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    id: {
      type: DataTypes.UUID, //de tipo UUID para no chocar con los id que vienen de la api
      defaultValue: DataTypes.UUIDV4, //ver DataTypes.UUID4 id alfanumerico que se genera solo
      primaryKey: true, //va a ser unico, no se permite null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, 
  {
  timestamps: false //para que no me agregue campos de fecha y hora de modificaciones de registro
})
}

