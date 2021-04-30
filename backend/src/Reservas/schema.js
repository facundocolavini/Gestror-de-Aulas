const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
  numDeAula:{
    type: String,
    required: true
  },
  cantidadDeAlumnos:{
    type: Number, 
    required: true
  },
  disponibilidad:{
    type: String,
    required: true
  },
  curso: {
    type: String,
    required: true
  },
  materia: {
    type: String,
    required: true
  },
  docente: {
    type: String,
    required: true
  },
  turno: {
    type: String,
    required: true
  },
  dia:{     
    type: String,
    required: true
  }
}); 

  module.exports =  schema;