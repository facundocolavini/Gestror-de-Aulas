const mongoose = require ('mongoose');
 

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports= schema;