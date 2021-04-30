import React  from 'react';

 const ReservadaTable = (props)=>{
    console.log(props.data,'RESERVADAS en la tabla')
    return (
        <div >
            <h3 className="mb-5">Aulas Reservadas de la Semana</h3>
            <table className=" pr-0 table">
                <thead>
                    <tr>
                        <th scope="col">Aula</th>
                        <th scope="col">Capacidad</th>
                        <th scope="col">Disponibilidad</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Materia</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Turno</th>
                        <th scope="col">Dia</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.length > 0 ?
                        props.data.map(aula=>{
                            // console.log(aula,'AulaTable')
                            return(
                            <tr  key={aula._id} className="  mr-1 ml-1">
                                <td className="pr-2">{aula.numDeAula}</td>
                                <td className="pr-2">{aula.cantidadDeAlumnos}</td>
                                <td className="pr-2">{aula.disponibilidad}</td>
                                <td className="pr-2">{aula.curso}</td>
                                <td className="pr-2">{aula.materia}</td>
                                <td className="pr-2">{aula.docente}</td>
                                <td className="pr-2">{aula.turno}</td>
                                <td className="pr-2">{aula.dia}</td>
                                <td>
                                       <button 
                                        onClick={()=>props.deleteReserva(aula._id)} 
                                        className="btn btn-primary" >
                                        <i style={{  backgroundPosition:'center',textaling:'center'}} className="material-icons">delete_forever</i> 
                                </button>
                                </td> 
                                
                            </tr>
                            );
                        }): (
                           <tr>
                            <td className="pl-3 pt-3">No hay aulas reservadas...</td> 
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

 


export default ReservadaTable;