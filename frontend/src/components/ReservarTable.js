import React  from 'react';

//ACA VOY A MOSTRAR YA LA INFORMACION DEL AULA RESERVADA modificar el map cuando tenga la nueva ruta de reservas en la base de datos.
 const ReservarTable = (props)=>{
    return (
        <div>
    

            <table className="mt-5 pr-0 table">
                <thead>
                    <tr>
                        <th scope="col">Aula</th>
                        <th scope="col">Capacidad</th>
                        <th scope="col">Reservar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.length > 0 ?
                        props.data.map(aula=>{
                            // console.log(aula,'AulaTable')
                            return(
                            <tr key={aula._id} className=" mr-2 ">
                                <td className="pr-2">{aula.numDeAula}</td>
                                <td className="pr-2">{aula.capacidad}</td>
                                <td>
                                    <button 
                                        onClick={(e)=>props.editRow(aula)} 
                                        className="btn btn-primary mr-2">
                                            Reservar 
                                    </button>
                                </td>
                            </tr>
                            );
                        }): (
                            <tr className="pl-3 pt-3"><td>No hay aulas cargadas para reservar...</td></tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

 


export default ReservarTable;