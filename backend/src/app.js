//Es el encargado de tener el codigo del servidor o framework

//Defino el servidor
const  express = require ('express');
const cors = require('cors');
const { json } = require('express');
const app=express();//servidor

//Setting - variables donde toda la app tendra acceso
app.set('port',process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/Aulas', require('./Aulas/routes'));
app.use('/api/Cursos', require('./Cursos/routes'));
app.use('/api/Materias', require('./Materias/routes'));
app.use('/api/Profesores', require('./Profesores/routes'));
app.use('/api/Reservas', require('./Reservas/routes'));
 

module.exports = app;