const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));//este middleware se encarga de analizar los cuerpos de las solicitudes HTTP entrantes que contienen datos codificados en formularios HTML y convertirlos en objetos JavaScript. 
server.use(bodyParser.json({ limit: '50mb' })); //este middleware se encarga de analizar los cuerpos de las solicitudes HTTP entrantes que tienen formato JSON y convertirlos en objetos JavaScript. 
server.use(cookieParser());
server.use(morgan('dev'));//este middleware te permite ver información útil sobre las solicitudes y respuestas que pasan por el servidor. 

//CORS - este código configura los encabezados de control de acceso HTTP para permitir solicitudes desde http://localhost:3000 hacia tu servidor. También permite el uso de cookies y especifica qué encabezados y métodos HTTP son permitidos. 
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
}); 

server.use('/', routes); // responsable de dirigir las solicitudes que llegan a la ruta raíz de tu servidor a las definiciones de rutas y controladores contenidos en el middleware routes.

// Error catching endware.//este middleware se utiliza para capturar y manejar errores que ocurren en tu aplicación. Si se produce un error en algún lugar de la aplicación, este middleware capturará ese error, establecerá el código de estado y enviará una respuesta de error con un mensaje informativo al cliente. También imprimirá el error en la consola del servidor para fines de registro y seguimiento.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
