//Va arranca rnuestro servidor e importar nuetros modulos.
//Exporto app de app.js a index.js
require('dotenv').config();
const app = require('./app');
require('./database');

async function  main (){
    await app.listen(app.get('port'));
    console.log('Server on port',app.get('port'));
}

main();