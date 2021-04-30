import React  from 'react';
import {useForm} from "react-hook-form";
 


const AddCursosForm =(props)=>{ 
    const {register,errors,handleSubmit}=useForm();
    const onSubmit=(data,e)=>{
        setTimeout(window.location.reload(),1000);
        e.preventDefault()
        console.log(e)
        props.addCurso(data) 
    }
        return (
            <div className="row  pl-4 pt-2 pb-2 pr-2">
                <div className="card card-body col col-md-10">
                    <h3 className="mb-4">Agregar Curso</h3>
                    <form onSubmit={handleSubmit(onSubmit)} > 
                        <div className="row">
                            <div className=" col col-md form-group text-center text-md-left">
                                <label>Cursos:</label>
                                <select 
                                    name="nombre"
                                    className="form-control"
                                    type="text"
                                    ref={
                                        register({
                                            required:{value:true,message:'Campo Requerido'}
                                        })
                                    }
                                >  
                                    <option value="" selected disabled>Seleccione un Curso</option> 
                                    <option >Informatica</option>  
                                    <option >Robotica</option>    
                                    <option >Quimica</option>    
                                    <option >Fisica</option>  
                                    <option >Ingles</option>    
                                </select>   
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.nombre?.message}
                                </span>
                            </div>
                        </div>
                        <button  type="submit" className="left btn btn-primary mt-3">Save</button>          
                    </form>
                </div>
            </div>
        )
 
}

export default AddCursosForm;
