import React  from 'react';

 const AulaTable = (props)=>{
    //console.log(props.data,'DESDE AULATABLE');
    return (
        <div >
            <h3 className="mb-4">Aulas</h3>
            <table className=" pr-0 table">
                <thead>
                    <tr>
                        <th scope="col">Aula</th>
                        <th scope="col">Capacidad</th>
                        <th scope="col">Disponibilidad</th>
                        <th scope="col">Edit/Delete</th>
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
                                <td className="pr-2">{aula.disponibilidad}</td>
                                <td>
                                    <button 
                                        onClick={(e)=>props.editRow(aula)} 
                                        className="btn btn-warning mr-2" >
                                        <i className="material-icons" style={{backgroundPosition:'center',alignItems:"center"}}>edit</i>
                                    </button>
                                    <button 
                                            onClick={()=>props.deleteAula(aula._id)} 
                                            className="btn btn-primary" >
                                            <i style={{  backgroundPosition:'center',textaling:'center'}} className="material-icons">delete_forever</i> 
                                    </button>
                                </td>
                            </tr>
                            );
                        }): (
                            <tr className="pl-3 pt-3"><td>No hay aulas cargadas...</td></tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

 


export default AulaTable;