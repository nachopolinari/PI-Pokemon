require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Creación de la instancia de Sequelize para la conexión a la base de datos.
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
  {
    logging: false, // Establece a false para deshabilitar la salida de consultas SQL en la consola.
    native: false, // Sequelize sabe que no estamos usando pg-native.
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y los agregamos al arreglo modelDefiners.
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexión (sequelize) a todos los modelos.
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos (por convención).
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Definición de relaciones entre modelos (ejemplo de una relación de muchos a muchos).
const { Pokemon, Type } = sequelize.models;

// Relaciones (en este caso, una relación de muchos a muchos a través de la tabla intermedia "pokemon_type").
Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" });

// Exportamos los modelos y la conexión para su uso en otros módulos.
module.exports = {
  ...sequelize.models, // Para poder importar los modelos como: const { Pokemon, Type } = require('./db.js');
  conn: sequelize, // Para importar la conexión como: { conn } = require('./db.js');
};