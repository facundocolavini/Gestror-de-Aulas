const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
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
    },
    materia:{
      type:String,
      required:true
    }
  });

  module.exports =  schema;