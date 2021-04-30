
const mongoose = require('mongoose');
const schema = require('./schema');
 

//Materia y turno tiene un docente siempre
//Cambiar al docente desde el frontEnd

/* MateriaSchema.plugin(require('mongoose-autopopulate')); */
 
module.exports = mongoose.model('Profesores', schema);


