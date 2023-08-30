const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{
      type:DataTypes.TEXT,
    },
    life:{
      type:DataTypes.FLOAT,
    },
    attack:{
      type:DataTypes.FLOAT,
    },
    defense:{
      type:DataTypes.FLOAT,
    },
    speed:{
      type:DataTypes.FLOAT,
    },
    height:{
      type:DataTypes.FLOAT,
    },
    weight:{
      type:DataTypes.FLOAT,
    }
  },{
    timestamps:false
  });
};
