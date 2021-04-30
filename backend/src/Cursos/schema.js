const mongoose = require ('mongoose');
 

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    
    }
})


module.exports= schema;