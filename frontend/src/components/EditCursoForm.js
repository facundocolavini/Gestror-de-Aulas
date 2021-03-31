
import {useForm} from "react-hook-form";
 
 

const EditCursoForm = (props)=>{ 
 
    const {register,errors,handleSubmit,setValue}= useForm({
        defaultValues:props.currentCurso
    });
    
    setValue('nombre',props.currentCurso.nombre); 
 
    
    const onSubmit=(data,e)=>{
        e.preventDefault()
        const data_id = props.currentCurso._id;
        Object.defineProperty(data,'_id:',{value:1,writable:false})
        data._id= props.currentCurso._id;
        props.updateCurso(data_id,data) 
        setTimeout(window.location.reload(),1000);
    }

    return (
        <div className="row  pl-4 pt-2 pb-2 pr-2">
            <div className="card card-body col col-md-10">
                <h3 className="mb-4">Editar Información</h3>
                <form onSubmit={handleSubmit(onSubmit)} > 
                    <div className="row">
                        <div className=" col col-md form-group text-center text-md-left">
                            <label>Curso:</label>
                            <select 
                                name="nombre"
                                className="form-control"
                                type="text"
                                ref={
                                    register({
                                        required:{value:true,message:'Ingrese un curso'}
                                    })
                                }
                            >  
                                <option value="" selected disabled>Seleccione un Curso</option> 
                                <option >Informatica</option>  
                                <option >Robotica</option>    
                                <option >Quimica</option>    
                                <option >Física</option>  
                                <option >Ingles</option>    
                            </select> 
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.nombre?.message}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="left btn btn-primary mt-3">Editar Curso</button>            
                </form>
            </div>
        </div>
    )
 
}

export default EditCursoForm;
