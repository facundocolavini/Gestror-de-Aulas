//Modelar nuestros datos como van a lucir los datos y como crea los datos
const mongoose = require ('mongoose');


/* var Dia = require('./Dia').schema; */

const schema = new mongoose.Schema({
    numDeAula:{
        type: String,
        enum:[100,101,102,103,104,105,106,107,108,109,110],
        unique:true 
    },
    capacidad:{
        type: Number,
        enum:[25,30,40], 
        default:0 
    },
    disponibilidad:{
        type: String,
        enum: ["Disponible","Ocupada"]
    }
/*     dias:[{ type: Schema.ObjectId, ref: "dia" ,autopopulate:true }] */
})
/* AulaSchema.index({ numDeAula: 1, capacidad: 1,disponibilidad:1 }, { unique: true }); */
/* AulaSchema.plugin(require('mongoose-autopopulate')); */
module.exports =  schema;