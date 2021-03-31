//Contiene el codigo de la conexion a la base de datos
const mongoose = require('mongoose');
require('dotenv').config();

//Condicional ternario si no encuentra la variable de entorno
console.log(process.env.MONGODB_URI);
const URI=process.env.MONGODB_URI
? process.env.MONGODB_URI 
:'mongodb://localhost/database_test';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true ,
    useFindAndModify:false
})

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('DB is connected');

})