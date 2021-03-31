import {useForm} from "react-hook-form";
 
 

const EditAulaForm = (props)=>{ 
 
    const {register,errors,handleSubmit,setValue}= useForm({
        defaultValues:props.currentAula 
    });
    
    setValue('numDeAula',props.currentAula.numDeAula); 
    setValue('capacidad',props.currentAula.capacidad);
    setValue('disponibilidad',props.currentAula.disponibilidad);
    
    const onSubmit=(data,e)=>{
        e.preventDefault()
        const data_id = props.currentAula._id;
        Object.defineProperty(data,'_id:',{value:1,writable:false})
        data._id= props.currentAula._id;
        props.updateAula(data_id,data) 
        setTimeout(window.location.reload(),1000);
    }

    return (
        <div className="row  pl-4 pt-2 pb-2 pr-2">
            <div className="card card-body col col-md-10">
                <h3 className="mb-4">Editar Información</h3>
                <form onSubmit={handleSubmit(onSubmit)} > 
                    <div className="row">
                        <div className=" col-6 col-md-6 form-group text-center text-md-left">
                            <label>Nro de Aula:</label>
                            <select 
                                name="numDeAula"
                                className="form-control"
                                type="text"
                                ref={
                                    register({
                                        required:{value:true,message:'Campo Requerido'}
                                    })
                                }
                            >  
                                <option value="" selected disabled>Seleccione un Aula</option> 
                                <option >100</option>  
                                <option >101</option>    
                                <option >102</option>    
                                <option >103</option>  
                                <option >104</option>    
                                <option >105</option>
                                <option >106</option>  
                                <option >107</option>    
                                <option >108</option>
                                <option >109</option>
                                <option >110</option>
                            </select> 
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.numDeAula?.message}
                            </span>
                        </div>
                        <div className=" col-6 col-md-6 form-group text-center text-md-left">
                            <label htmlFor="capacidad">Capacidad:</label>
                            <select 
                                name="capacidad"
                                className="form-control"
                                type="text"
                                ref={
                                    register({
                                        required:{value:true,message:'Campo Requerido'}
                                    })
                                }
                            >  
                                <option value="" selected disabled  >Capacidad</option> 
                                <option >25</option>    
                                <option >30</option>    
                                <option >40</option>  
                            </select>   
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.capacidad?.message}
                            </span>
                        </div>
                    </div>
                    <div className="row pl-3 pr-3 ">
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
                        >  
                            <option value="" selected disabled>Seleccione una disponibilidad</option> 
                            <option >Disponible</option>    
                            <option >Ocupada</option>    
                        </select>  
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.disponibilidad?.message}
                        </span>
                            
                    </div>
                    <button type="submit" className="left btn btn-primary mt-3">Editar Aula</button>
                                    
                </form>
            </div>
        </div>
    )
 
}

export default EditAulaForm;
