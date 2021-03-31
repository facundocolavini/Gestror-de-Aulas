const mongoose = require("mongoose");
const schema = require('./schema');

//Dar de alta , relacionar


module.exports = mongoose.model('Cursos',schema)