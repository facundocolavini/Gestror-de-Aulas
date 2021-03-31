
import React  from 'react';

const CursoTable = (props)=>{
   //console.log(props.data,'DESDE AULATABLE');
   return (
       <div >
           <h3 className="mb-4">Cursos</h3>
           <table className=" pr-0 table">
               <thead>
                   <tr>
                       <th scope="col">Cursos</th>
                       <th scope="col">Edit/Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       props.data.length > 0 ?
                       props.data.map(curso=>{
                           // console.log(aula,'AulaTable')
                           return(
                           <tr key={curso._id} className=" mr-2 ">
                               <td className="pr-2">{curso.nombre}</td>
                               <td>
                                   <button 
                                       onClick={(e)=>props.editRow(curso)} 
                                       className="btn btn-warning mr-2" >
                                       <i className="material-icons" style={{backgroundPosition:'center',alignItems:"center"}}>edit</i>
                                   </button>
                                   <button 
                                        onClick={()=>props.deleteCurso(curso._id)} 
                                        className="btn btn-primary" >
                                        <i style={{  backgroundPosition:'center',textaling:'center'}} className="material-icons">delete_forever</i> 
                                   </button>
                               </td>
                           </tr>
                           );
                       }): (
                           <tr className="pl-3 pt-3"><td>No hay cursos cargados...</td></tr>
                       )
                   }
               </tbody>
           </table>
       </div>
   )
}




export default CursoTable;