const turnosCtrl ={};
const Turno = require('../models/Turno');

turnosCtrl.getTurnos = async (req,res)=>{
    //Consulto los datos en mi model
    const turnos = await Turno.find()//[{},{},{}]
    res.json(turnos);
    console.log('Todos los guardados');
    console.log(turnos);
}

turnosCtrl.createTurno = async (req,res)=>{
    //Consulto que datos estamos enviando
    //Req.body representan los datos que envia el cliente
    console.log(req.body);
    //Nueva Curso
    const {turno} = req.body;
    const newTurno = new Turno({
        turno

    });
    await newTurno.save();//Lo guardo en la base de datos el aula ingresada
    res.json({message:'Turno Guardado'})
    console.log('Turno Guardado');
    console.log(newTurno);
}
turnosCtrl.updateTurno = async (req,res)=>{
    const {turno} = req.body;
    const turno_actualizado = await Turno.findOneAndUpdate({_id: req.params.id},{
        turno
    });
    res.json({message:'Turno actualizado'});
    console.log('Turno actualizado');
    console.log(turno_actualizado);
}

turnosCtrl.deleteTurno= async (req,res)=>{
    const turno_eliminado =await Turno.findByIdAndDelete(req.params.id);
    if(turno_eliminado === null){
        console.log('El Turno ya se elimino anteriormente ');
    }else{
    res.json({message:'Turno Eliminado'});
    console.log('El Turno fue Eliminado');
    console.log(turno_eliminado);
    }
}
turnosCtrl.getByIdTurno = async (req,res)=>{
        //Me devuelve el id de esa aula y consulto en la base de datos
        const turno_ById = await Turno.findById(req.params.id);
        //Se lo envio al cliente
        if(turno_ById === null){
            console.log('El Turno ya se elimino anteriormente ');
        }else{
            res.json(turno_ById);
            console.log('Turno encontrado por id');
            console.log(turno_ById);
        }
}

module.exports = turnosCtrl;