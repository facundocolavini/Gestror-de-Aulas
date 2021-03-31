const mongoose = require ('mongoose');

const schema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      unique: true
    },
    alumnos: {
        type: Number,
        default: 0
    } 
  });

  module.exports =  schema;