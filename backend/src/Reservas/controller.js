
const Model = require('./model');

exports.getAll = async (req,res)=>{
    //Consulto los datos en mi model
    const reserva = await Model.find()//[{},{},{}]
    res.json(reserva);
    console.log('Todos los datos guardados');
    console.log(reserva);
}
exports.save = async (req,res)=>{
    //Consulto que datos estamos enviando
    //Req.body representan los datos que envia el cliente
    console.log(req.body);
    //Nueva Curso
    const {numDeAula,cantidadDeAlumnos,disponibilidad,curso,materia,docente,turno,dia} = req.body;
    const newReserva = new Model({
        numDeAula,
        cantidadDeAlumnos,
        disponibilidad,
        curso,
        materia,
        docente,
        turno,
        dia
    });
    await newReserva.save();//Lo guardo en la base de datos el numDeAula ingresada
    res.json({message:'Reserva Guardada'})
    console.log('Reserva Guardada');
    console.log(newReserva);
}
exports.put = async (req,res)=>{
    const {numDeAula,cantidadDeAlumnos,disponibilidad,curso,materia,docente,turno,dia} =req.body;
    const reserva_actualizado = await Model.findOneAndUpdate({_id:req.params.id},{
        numDeAula,
        cantidadDeAlumnos,
        disponibilidad,
        curso,
        materia,
        docente,
        turno,
        dia
    });
    res.json({message:'Reserva actualizada'});
    console.log('Reserva actualizada');
    console.log(reserva_actualizado);
}

exports.remove= async (req,res)=>{
    const reserva_eliminado =await Model.findByIdAndDelete(req.params.id);
    if(reserva_eliminado === null){
        console.log('La reserva ya se elimino anteriormente ');
    }else{
    res.json({message:'Reserva Eliminada'});
    console.log('La Reserva fue eliminada');
    console.log(reserva_eliminado);
    }
}

exports.getOne = async (req,res)=>{
    //Me devuelve el id de esa numDeAula y consulto en la base de datos
    const reserva_ById = await Model.findById(req.params.id);
    //Se lo envio al cliente
    if(reserva_ById === null){
        console.log('La reserva ya se elimino anteriormente ');
    }else{
        res.json(reserva_ById);
        console.log('Reserva encontrada por id');
        console.log(reserva_ById);
    }
}

