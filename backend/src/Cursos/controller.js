 
const Model= require('./model');
const {asyncHandler} = require('../utils/errHandlerMiddleware');

exports.getAll =asyncHandler(async (req,res)=>{
    //Consulto los datos en mi model
    const cursos = await Model.find()//[{},{},{}]
    res.json(cursos);
    console.log('Todos los guardados');
    console.log(cursos);
})

exports.save = async (req,res)=>{
    //Consulto que datos estamos enviando
    //Req.body representan los datos que envia el cliente
    console.log(req.body);
    //Nueva Curso
    const {nombre} = req.body;
    const newCurso = new Model({
        nombre
    });
    await newCurso.save();//Lo guardo en la base de datos el aula ingresada
    res.json({message:'Curso Guardado'})
    console.log('Curso Guardado');
    console.log(newCurso);
}
exports.put = async (req,res)=>{
    const {nombre} = req.body;
    const curso_actualizado = await Model.findOneAndUpdate({_id: req.params.id},{
        nombre
    });
    res.json({message:'Curso actualizado'});
    console.log('Curso actualizado');
    console.log(curso_actualizado);
}

exports.remove= async (req,res)=>{
    const curso_eliminado =await Model.findByIdAndDelete(req.params.id);
    if(curso_eliminado === null){
        console.log('El Curso ya se elimino anteriormente ');
    }else{
    res.json({message:'Curso Eliminado'});
    console.log('El Curso fue Eliminado');
    console.log(curso_eliminado);
    }
}
exports.getOne = async (req,res)=>{
        //Me devuelve el id de esa aula y consulto en la base de datos
        const curso_ById = await Model.findById(req.params.id);
        //Se lo envio al cliente
        if(curso_ById === null){
            console.log('El Curso ya se elimino anteriormente ');
        }else{
            res.json(curso_ById);
            console.log('Curso encontrado por id');
            console.log(curso_ById);
        }
}

 