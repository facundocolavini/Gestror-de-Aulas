const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    materia: {
      type: String,
      required: true
 
    },
    alumnos: {
      type: Number,
      
    },
    curso:{     
      type: String,
      required: true
    },
    docente:{
      type: String,
      required: true
    }
  });

  module.exports =  schema;