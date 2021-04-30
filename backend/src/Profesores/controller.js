
const Model = require('./model');

exports.getAll = async (req,res)=>{
    //Consulto los datos en mi model
    const docente = await Model.find()//[{},{},{}]
    res.json(docente);
    console.log('Todos los datos guardados');
    console.log(docente);
}
exports.save = async (req,res)=>{
    //Consulto que datos estamos enviando
    //Req.body representan los datos que envia el cliente
    console.log(req.body);
    //Nueva Curso
    const {docente,turno,dia,materia} = req.body;
    const newProfesor = new Model({
        docente,turno,dia,materia
    });
    await newProfesor.save();//Lo guardo en la base de datos el aula ingresada
    res.json({message:'Profesor Guardado'})
    console.log('Profesor Guardado');
    console.log(newProfesor);
}
exports.put = async (req,res)=>{
    const {docente,turno,dia,materia} =req.body;
    const docente_actualizado = await Model.findOneAndUpdate({_id:req.params.id},{
        docente,
        turno,
        dia,
        materia
    });
    res.json({message:'Profesor actualizado'});
    console.log('Profesor actualizado');
    console.log(docente_actualizado);
}

exports.remove= async (req,res)=>{
    const docente_eliminado =await Model.findByIdAndDelete(req.params.id);
    if(docente_eliminado === null){
        console.log('El docente ya se elimino anteriormente ');
    }else{
    res.json({message:'Profesor Eliminado'});
    console.log('El Profesor fue Eliminado');
    console.log(docente_eliminado);
    }
}

exports.getOne = async (req,res)=>{
    //Me devuelve el id de esa aula y consulto en la base de datos
    const docente_ById = await Model.findById(req.params.id);
    //Se lo envio al cliente
    if(docente_ById === null){
        console.log('El Profesor ya se elimino anteriormente ');
    }else{
        res.json(docente_ById);
        console.log('Profesor encontrada por id');
        console.log(docente_ById);
    }
}

