import {useForm} from "react-hook-form";
import React,{useState}  from 'react';
import {convertArrayToObjectIdValue} from "../utils/helpers";
import { v4 as uuidv4 } from 'uuid';

 
const turnos = [
    {_id:uuidv4(), TURNO:'19:00 a 23:00'},
    {_id:uuidv4(), TURNO:'12:30 a 18:30'},
    {_id:uuidv4(), TURNO:'7:30 a 12:00'}
]
 const turno = convertArrayToObjectIdValue(turnos, '_id','TURNO');
 console.log(turno,'TURNOS');

const AddReservaForm = (props)=>{   

    // console.log(props.currentReserva._id,'aula clickeada')
    // console.log(props.currentReserva.capacidad,'CAPACIDAD DE AULA')
    // console.log(props.cursos,'get')
    // console.log(props.materias,'get')
    // console.log(props.profesor,'get')

    const materiasPorCurso = [];
    const cantAlumPorMateria = [];
    //const docentesPorMateria = [];
    const turnoDelProf = [];
    const diaDeSemanaProf =[];
    const [CursoSelected,setCursoSelected] = useState({curso_selecionado:''})
    //const [AulaSelected,setAulaSelected] = useState({aula_selecionada:''})
    const [MateriaSelected,setMateriaSelected] = useState({materia_selecionada:''})
    const [ProfesorSelected,setProfesorSelected] = useState({profesor_selecionado:''})
    const [CantidadSelected,setCantidadSelected] = useState({cantidad_selecionada:''})
    const [TurnoSelected,setTurnoSelected] = useState({turno_selecionado:''})
    const [DiaSelected,setDiaSelected] = useState({dia_selecionado:''})
    const [DisponibilidadSelected,setDisponibilidad] = useState({disponibilidad_selecionada:''})

    const  handleChange = (e)=> {
        e.preventDefault()
        setCursoSelected({curso_selecionado: e.target.value }); 
    }

    const  matChange = (e)=> {
        e.preventDefault()
        setMateriaSelected({ materia_selecionada: e.target.value });
    }

    const  profChange = (e)=> {
        e.preventDefault()
        setProfesorSelected({profesor_selecionado: e.target.value });
    }
    
    const  diaChange = (e)=> {
        e.preventDefault()
        setDiaSelected({dia_selecionado: e.target.value });
    }

    const  turnoChange = (e)=> {
        e.preventDefault()
        setTurnoSelected({turno_selecionado: e.target.value });
    }

    // const  aulaChange = (e)=> {
    //     e.preventDefault()
    //     setAulaSelected({aula_selecionada: e.target.value });
    // }

    const  cantidadChange = (e)=> {
        e.preventDefault()
        setCantidadSelected({cantidad_selecionada: e.target.value });
    }
    const  disponibilidadChange = (e)=> {
        e.preventDefault()
        setDisponibilidad({disponibilidad_selecionada: e.target.value });
    }
    const existDocente = (docente) => props.reservadas.filter(item => item.docente === docente).length
    const mismoTurno = (turno) => props.reservadas.filter(item => item.turno === turno).length
    const mismoDia = (dia) => props.reservadas.filter(item => item.dia === dia).length
    const mismaAula = (aula) => props.reservadas.filter(item => item.numDeAula === aula).length
    const docenteSelect=[]

    props.profesor.filter(p=> p.materia === MateriaSelected.materia_selecionada ? docenteSelect.push(p.docente)  && turnoDelProf.push(p.turno)
    && diaDeSemanaProf.push(p.dia):p)
  
    for (var i = 0; i < props.materias.length; i++){
        //Cantidad de materias por la curso selecionada en el form
        if(props.materias[i].curso === CursoSelected.curso_selecionado  ){
            materiasPorCurso.push(props.materias[i].materia )
            if(MateriaSelected.materia_selecionada === props.materias[i].materia){
                cantAlumPorMateria.push(props.materias[i].alumnos)
            }
        } 
    }

    const {register,errors,handleSubmit,setValue}= useForm({ defaultValues:props.currentReserva });

    setValue('numDeAula', props.currentReserva.numDeAula); 
    setValue('curso',ProfesorSelected.profesor_selecionado);
    setValue('materia',MateriaSelected.materia_selecionada); 
    setValue('disponibilidad',props.currentReserva.disponibilidad); 
    setValue('docente',ProfesorSelected.profesor_selecionado); 
    setValue('turno',TurnoSelected.turno_selecionado); 
    setValue('dia',DiaSelected.dia_selecionado); 
    setValue('cantidadDeAlumnos',props.currentReserva.cantidadDeAlumnos); 


    const encontrarMat = (data) => props.reservadas.map(item => item.materia === data) 
    const materiaRepetida = (arrMaterias,reservadas)=> {
        for(let c=0; c < arrMaterias.length;c++){
            if (arrMaterias[c]=== true){
                return reservadas[c].materia;
            }
        }
    }


    const onSubmit=(data,e)=>{
        e.preventDefault()

        if(props.reservadas.length === 0 ){
            alert(`GUARDANDO PARA EL ${data.dia} TURNO DE ${data.turno} EN EL AULA ${data.numDeAula}`)
            console.log(data,'data');
            props.addReserva(data)
            setTimeout(window.location.reload(),1000);
        }else{ //Validations 
            for (let r = 0; r < props.reservadas.length; r++){
                if(data.numDeAula === props.reservadas[r].numDeAula){ 
                    if(data.curso){
                        if(data.materia === materiaRepetida(encontrarMat(MateriaSelected.materia_selecionada),props.reservadas)){ 
                            alert(`La materia ${data.materia} ya esta reserada`);
                            break;
                        }
                        if (data.docente === props.reservadas[r].docente){
                            alert('Ya se encuentra reservado ese docente para esta materia de la semana');
                            break;
                        }
                        if(data.cantidadDeAlumnos >  props.currentReserva.capacidad ){ 
                            alert(`La cantidad de alumnos es de ${data.cantidadDeAlumnos} superar la capacidad del aula que es de ${props.currentReserva.numDeAula}`);
                            break;
                        }
                        if( data.dia === props.reservadas[r].dia   ){ 
                            if(mismoTurno(data.turno) === 0  && existDocente(data.docente) === 0 &&  mismoDia(data.dia) <= 2){
                                alert(`RESERVA GUARDADA PARA EL ${data.dia} TURNO DE ${data.turno} EN EL AULA ${data.numDeAula}`)
                                setTimeout(window.location.reload(),1000); 
                                props.addReserva(data);
                                break;
                            }else{ 
                                    alert(`El aula ${data.numDeAula} ya ocupa los 3 turnos del dia ${data.dia}`); 
                                    break;}     
                        }else{
                            if(materiaRepetida(encontrarMat(MateriaSelected.materia_selecionada),props.reservadas) !== data.materia){
                                if(mismoDia(data.dia) <= 2  ){
                                    alert(`RESERVA GUARDADA PARA EL ${data.dia} TURNO DE ${data.turno} EN EL AULA ${data.numDeAula}`)
                                    setTimeout(window.location.reload(),1000);
                                    props.addReserva(data);
                                    break;
                                }  
                                else{
                                    alert(`El aula ${data.numDeAula} ya ocupa los 3 turnos del dia ${data.dia}`); 
                                    break;
                                }
                            }else{
                                alert(`La materia ${data.materia} ya esta reserada`);
                                break;   
                            }
                        }
                    }else{ 
                            alert('No se selecciono ningun curso '); 
                            break;
                    }
                }else{//Validations for new aula
                    if(materiaRepetida(encontrarMat(MateriaSelected.materia_selecionada),props.reservadas) !== data.materia){
                        if(mismaAula (data.numDeAula) === 0 ){
                            alert(`RESERVA GUARDADA PARA EL ${data.dia} TURNO DE ${data.turno} EN EL AULA ${data.numDeAula}`)
                            setTimeout(window.location.reload(),100);
                            props.addReserva(data);
                            break;
                        }else if(materiaRepetida(encontrarMat(MateriaSelected.materia_selecionada),props.reservadas) !== data.materia && mismoDia(data.dia) <= 2){
                            alert(`RESERVA GUARDADA PARA EL ${data.dia} TURNO DE ${data.turno} EN EL AULA ${data.numDeAula}`)
                            setTimeout(window.location.reload(),100);
                            props.addReserva(data);
                            break;
                        }
                        else{ 
                            alert(`El aula ${data.numDeAula} ya ocupa los 3 turnos del dia ${data.dia}`); 
                            break;  
                        }
                    }else{
                        alert(`La materia ${data.materia} ya esta reserada`); 
                        break;  
                    }

                }
            }       
        }  
    }

    return (
        <div className="card card-body col col-md-10">
            <h3 className="mb-4">Reservar Aula</h3>
            <form onSubmit={handleSubmit(onSubmit)} > 
                <div className="row">
                <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="numDeAula">Aula:</label>
                        <select 
                            name="numDeAula"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{}}
                            value={props.currentReserva.numDeAula} 
                        > 
                        <option value="" selected disabled>Aula Seleccionada</option> 
                        {props.aulas.map(aula => (
                            <option  key={aula._id}>{aula.numDeAula}</option>
                        ))
                        }
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.numDeAula?.message}
                        </span>       
                    </div>
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="curso">Curso:</label>
                        <select 
                            name="curso"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{handleChange(e) }}
                            value={CursoSelected.curso_selecionado} 
                        > 
                        <option value="" selected disabled>Seleccione la Curso</option> 
                        {props.cursos.map(curso => (
                            <option key={curso._id} value={curso.value}>{curso.nombre}</option>
                        ))
                        }
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.curso?.message}
                        </span>       
                    </div>
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="materia">Materia:</label>
                        <select 
                            name="materia"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{matChange(e)}}
                            value={MateriaSelected.materia_selecionada} 
                        >  
                            <option value="" selected disabled>Seleccione la materia</option> 
                            {
                                
                                materiasPorCurso.map((materia,id=uuidv4()) => (
                                    <option key={id} value={materia.value}>{materia}</option>
                                ))
                            }
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.materia?.message}
                        </span> 
                    </div>
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="docente">Profesor:</label>
                        <select 
                            name="docente"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{profChange(e); existDocente(ProfesorSelected.profesor_selecionado)} }
                            value={ProfesorSelected.profesor_selecionado} 
                            
                        >  
                            <option value="" selected disabled>Seleccione un Profesor</option> 
                            {
                                docenteSelect.map((docente,id=uuidv4) => (
                                    <option key={id} value={docente.value}>{docente}</option>
                                ))
                            }  
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.docente?.message}
                        </span>
                    </div>
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="disponibilidad">Disponibilidad:</label>
                        <select 
                            name="disponibilidad"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{disponibilidadChange(e)}}
                            value={DisponibilidadSelected.disponibilidad_selecionada} 
                        >  
                            <option value="" selected disabled>Seleccione una disponibilidad</option>   
                            <option >Ocupada</option>    
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.disponibilidad?.message}
                        </span>
                    </div>
            
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="cantidadDeAlumnos">Cantidad de Alumnos:</label>
                        <select 
                            name="cantidadDeAlumnos"
                            className="form-control"
                            type="number"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{cantidadChange(e)}}
                            value={CantidadSelected.cantidad_selecionada} 
                        >  
                            <option value="" selected disabled>Seleccione la cantidad de alumnos</option> 
                            {
                                cantAlumPorMateria.map((alumnos,id=uuidv4) => (
                                    <option key={id} value={alumnos.value}>{alumnos}</option>
                                ))
                            }  
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.cantidadDeAlumnos?.message}
                        </span> 
                    </div>
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="turno">Turno:</label>
                        <select 
                            name="turno"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{turnoChange(e); mismoTurno(TurnoSelected.turno_selecionado)}}
                            value={TurnoSelected.turno_selecionado} 
                        >  
                            <option value="" selected disabled>Turno disponible</option> 
                            {
                                turnoDelProf.map((turno,id=uuidv4) => (
                                    <option key={id} value={turno.value}>{turno}</option>
                                ))
                            }
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.turno?.message}
                        </span>
                    </div>
                    <div className="col-6 col-md-6 form-group text-center text-md-left">
                        <label htmlFor="dia">Día:</label>
                        <select 
                            name="dia"
                            className="form-control"
                            type="text"
                            ref={
                                register({
                                    required:{value:true,message:'Campo Requerido'}
                                })
                            }
                            onChange={(e)=>{diaChange(e); mismoDia(DiaSelected.dia_selecionado)}}
                            value={DiaSelected.dia_selecionado} 
                        >  
                            <option value="" selected disabled>Día disponible:</option> 
                            {
                                diaDeSemanaProf.map((dia,id=uuidv4) => (
                                    <option key={id} value={dia.value}>{dia}</option>
                                ))
                            }
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.dia?.message}
                        </span>
                    </div>
                </div>
            <button type="submit" className="left btn btn-primary mt-3">Reservar esta aula</button>                    
            </form>
        </div>           
    )
}

export default AddReservaForm;
