/* const aulasCtrl ={}; */
const Model = require('./model');
 
exports.getAll = async (req,res)=>{
    //Consulto los datos en mi model
    const aulas = await Model.find();
    res.status(200).json(aulas);
    console.log('Todas las aulas:');
    console.log(aulas);
}
/* //Asigno docente a la materia
exports.putDiaEnAula= async (req,res)=>{
    const {_id}=req.params;
    const{dia}= req.body;
    console.log(dia);
    const aulaUpdate =await Model.findByIdAndUpdate(_id,{$push:{dias:dia}})
    res.send(`${aulaUpdate} Se agrego el dia al aula  `)
}
 
//Elimino docente de la materia
exports.removeDiaEnAula= async (req,res)=>{
    const {_id}=req.params;
    const{dia}= req.body
    const aulaUpdate =await Model.findByIdAndUpdate(_id,{$pull:{dias:dia}})
    res.send(`${aulaUpdate} La fecha se elimino de la semana`);
    console.log(aulaUpdate);
} */

exports.save = async (req,res)=>{
    //Consulto que datos estamos enviando
    //Req.body representan los datos que envia el cliente
    try{
        console.log(req.body);
        const {numDeAula,capacidad,disponibilidad} = req.body;
        //Validaciones
        if( capacidad > 40 ||capacidad< 25){
            console.log('No existe esa capacidad'); 
            return res.sendStatus(400).json({msg:"La capacidad ingresada no existe"})
        }
        if( numDeAula ==''){
            console.log('Campo de NumDeAula vacio'); 
            return res.sendStatus(400).json({msg:"El campo esta vacio"})
        }
        if( numDeAula > 110 ||numDeAula< 100){
            console.log('No existe esa Aula');
            alert('No existe esa Aula')
            return res.sendStatus(400).json({msg:"El aula ingresada no existe"})
        }
        if(disponibilidad ){
            const newAula = new Model(req.body);
            await newAula.save();//Lo guardo en la base de datos el aula ingresada
            res.json({message:'Aula Guardada'})
            console.log('Aula Guardada');
            console.log(newAula); 
        }else{
            console.log(numDeAula,capacidad,disponibilidad)
        }
    }catch(err){
       res.sendStatus(500).json(err); 
    }
}

exports.put = async (req,res)=>{
    const {numDeAula,capacidad,disponibilidad} = req.body;
    const aula_actualizada = await Model.findOneAndUpdate({_id: req.params.id},{
        numDeAula,
        capacidad,
        disponibilidad
    });
    res.json({message:'Aulas actualizado'});
    console.log('Aulas actualizado');
    console.log(aula_actualizada);
}

exports.remove= async (req,res)=>{
    const aula_eliminado =await Model.findByIdAndDelete(req.params.id);
    if(aula_eliminado === null){
        console.log('El Aula ya se elimino anteriormente ');
        res.json({message:'El Aula ya se elimino anteriormente'});
    }else{
    res.json({message:'Aula Eliminado'});
    console.log('El Aula fue Eliminado');
    console.log(aula_eliminado);
    }
}
exports.getOne = async (req,res)=>{
        //Me devuelve el id de esa aula y consulto en la base de datos
        const aula_ById = await Model.findById(req.params.id);
        //Se lo envio al cliente
        if(aula_ById === null){
            console.log('El Aula ya se elimino anteriormente ');
        }else{
            res.json(aula_ById);
            console.log('Aula encontrada por id');
            console.log(aula_ById);
        }
}
 