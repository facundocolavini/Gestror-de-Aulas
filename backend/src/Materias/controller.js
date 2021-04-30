
const Model = require('./model');

exports.getAll = async (req,res)=>{
    //Consulto los datos en mi model
    const materias = await Model.find()//[{},{},{}]
    res.json(materias);
    console.log('Todos los guardados');
    console.log(materias);
}
 
exports.save = async (req,res)=>{
    //Consulto que datos estamos enviando
    //Req.body representan los datos que envia el cliente
    console.log(req.body);
    //Nueva Curso
    const {materia,alumnos,curso,docente} = req.body;
    const newMateria = new Model({
        materia,alumnos,curso,docente
    });
    await newMateria.save();//Lo guardo en la base de datos el aula ingresada
    res.json({message:'Materia Guardada'})
    console.log('Materia Guardada');
    console.log(newMateria);
}
exports.put = async (req,res)=>{
    const {materia,alumnos,curso,docente} =req.body;
    const materia_actualizada = await Model.findOneAndUpdate({_id: req.params.id},{
        materia,
        alumnos,
        curso,
        docente
    });
    res.json({message:'Materia actualizada'});
    console.log('Materia actualizada');
    console.log(materia_actualizada);
}

exports.remove= async (req,res)=>{
    const materia_eliminada =await Model.findByIdAndDelete(req.params.id);
    if(materia_eliminada === null){
        console.log('La Materia ya se elimino anteriormente ');
    }else{
    res.json({message:'Materia Eliminada'});
    console.log('La Materia fue Eliminada');
    console.log(materia_eliminada);
    }
}

exports.getOne = async (req,res)=>{
        //Me devuelve el id de esa aula y consulto en la base de datos
        const materia_ById = await Model.findById(req.params.id);
        //Se lo envio al cliente
        if(materia_ById === null){
            console.log('La Materia ya se elimino anteriormente ');
        }else{
            res.json(materia_ById);
            console.log('Materia encontrada por id');
            console.log(materia_ById);
        }
}



/* materiasCtrl.getMaterias = async (req,res)=>{
    //Consulto los datos en mi model
     await Materia
    .find()
    .populate('docente')
    .exec((err,materias)=>{
        console.log('Todos los guardados');
        console.log(materias);
        res.json(materias);
    });
} */
/* //Asigno docente a la materia
materiasCtrl.putDocenteEnMateria= async (req,res)=>{
    const {_id}=req.params;
    const{docente}= req.body
    const materiaUpdate =await Materia.findByIdAndUpdate(_id,{$push:{docente:docente}})
    res.send(`${materiaUpdate} Actualizado `)
}
//Elimino docente de la materia
materiasCtrl.removeDocenteEnMateria= async (req,res)=>{
    const {_id}=req.params;
    const{docente}= req.body
    if(docente.length == 0 ){
        res.json({msg:`No se puede eliminar , ya que no existe ningun docente para esta materia `});
    }else{
    const materiaUpdate =await Materia.findByIdAndUpdate(_id,{$pull:{docente:docente}})
    res.send(`${materiaUpdate} Docente Eliminado `)
    console.log(materiaUpdate)
    }
} */
