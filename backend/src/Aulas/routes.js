const express = require('express');
const router = express.Router();
const {getAll,save,getOne,put,remove} = require('./controller');

//Peticiones a la API Aula

router.get('/',getAll);
router.post('/',save);
router.get('/:id',getOne);
router.put('/:id',put);
router.delete('/:id',remove)


 


    
module.exports = router;