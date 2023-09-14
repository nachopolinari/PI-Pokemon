//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const server = require('./src/app.js');
const { conn } = require('./src/db.js');

/**
 * Este archivo es el punto de entrada del servidor.
 * Inicializa la aplicación y sincroniza la base de datos.
 */

// Sincronizamos todos los modelos con la base de datos.
conn.sync({ alter: true })
  .then(() => {
    // El servidor comienza a escuchar en el puerto 3001 una vez que la base de datos está lista.
    server.listen(3001, () => {//force:true->elimina alter:true->permanece
      console.log('Servidor escuchando en el puerto 3001'); // Se elimina la etiqueta %s para una salida más clara.
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
