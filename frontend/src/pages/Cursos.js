import React,{useEffect,useState}  from 'react';
import AddCursosForm from '../components/AddCursosForm';
import EditCursoForm from '../components/EditCursoForm';
import {M} from 'materialize-css'
import{getCursos,deleteCursos,postCursos} from "../services/cursosApi" ;
import CursoTable from '../components/CursoTable';


const Cursos =()=>{
    const [state,setState] =useState({data:[]});

    //Obtener cursos
    useEffect(  () => {
        const getData = async () => {
            const data = await getCursos();
            setState(prevState => {
            return {...prevState, ...data};
            });
        };
        try {
            getData();
        } catch (err) {
            console.log(err);
        }
    }, []);
    const [cursos,setCurso] = useState(state.data);
 

    //Agregar curso
    const addCurso = async (values) => {
      try {
        const response = await postCursos(values);
        console.log(response);
        setCurso(prevState => {
          return {...prevState,
            data: [...prevState.data, values]
          };
        });
      } catch (err){
        console.log(err);
      }
    };
    // const addAula = (aula)=>{
    //     setAula([
    //         ...aulas,
    //         aula
    //     ])
    // }
  
    //Eliminar Aula      
    const deleteCurso = (id,e)=>{
        setTimeout(window.location.reload(),1000);
        console.log(id);
        const arrayFiltrado =cursos.filter(curso=>curso._id !==id);
        //console.log(arrayFiltrado,'arrayfiltrado')
        setCurso(arrayFiltrado);
        deleteCursos(id);
        M.toast({html:'Información Eliminada'});

    }
 
    //Edit Aula
    const [editing,setEditing]= useState(false);
    const [currentCurso,setCurrentCurso] = useState({
     id_:null, nombre:''
    });

    const editRow = (curso)=>{
      setEditing(true);
      setCurrentCurso({
        _id:curso._id,
        nombre:curso.nombre,
      })   
    }
    // console.log(currentAula,'aula a editar')
    const updateCurso = async (id,updated) =>{
      fetch(`http://localhost:4000/api/Cursos/${id}`,{ 
        method: 'PUT',
        body: JSON.stringify(updated),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data=>{
           M.toast({html:'Información Actualizada'});
          setCurso({
            _id: data._id,
            nombre:data.nombre

          })
        })
        console.log(cursos);
    }

    return (
        <React.Fragment>
            <div className="container">
              <div className=" row mt-4">
                {
                  editing ? (
                    <div className="flex-large col-md-6  col text-center" >
                      <EditCursoForm 
                        currentCurso={currentCurso}
                        updateCurso={updateCurso}
                        data={state.data}
                      />
                    </div>
                  ) 
                  : (
                    <div className=" flex-large col-md-6  col text-center">
                        <AddCursosForm 
                          addCurso={addCurso} 
                          data={state.data}
                        />
                    </div>
                  )
                }
                <div className="flex-large col-md-6 col text-center">
                    <CursoTable  
                        editRow={editRow}
                        deleteCurso={deleteCurso} 
                        data={state.data}
                    />
                </div>
              </div>
            </div>
        </React.Fragment>
    )
    
    
}

export default Cursos;
