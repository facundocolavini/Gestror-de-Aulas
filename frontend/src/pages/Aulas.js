import React,{useEffect,useState}  from 'react';
import AddAulasForm from '../components/AddAulasForm';
import EditAulaForm from '../components/EditAulaForm';
import M from 'materialize-css'
import{getAulas,deleteAulas,postAulas} from "../services/aulasApi" ;
import AulaTable from '../components/AulaTable';

const Aulas =()=>{
    const [state,setState] =useState({data:[]});

    //Obtener aulas
    useEffect(  () => {
        const getData = async () => {
            const data = await getAulas();
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
    const [aulas,setAula] = useState(state.data);
 

    //Agregar Aula
    const addAula = async (values) => {
        try {
          const response = await postAulas(values);
          console.log(response);
          setAula(prevState => {
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
    const deleteAula = (id,e)=>{
        setTimeout(window.location.reload(),1000);
        console.log(id);
        const arrayFiltrado =aulas.filter(aula=>aula._id !==id);
        //console.log(arrayFiltrado,'arrayfiltrado')
        setAula(arrayFiltrado);
        deleteAulas(id);
        M.toast({html:'Información Eliminada'});

    }
 
    //Edit Aula
    const [editing,setEditing]= useState(false);
    const [currentAula,setCurrentAula] = useState({
     id_:null, numDeAula:'',capacidad:'',disponibilidad:''
    });

    const editRow = (aula)=>{
        setEditing(true);
        setCurrentAula({
            _id:aula._id,
            numDeAula:aula.numDeAula,
            capacidad:aula.capacidad,
            disponibilidad:aula.disponibilidad
        })
    }
    // console.log(currentAula,'aula a editar')
    const updateAula = async (id,updated) =>{
      try {
        fetch(`http://localhost:4000/api/Aulas/${id}`,{ 
          method: 'PUT',
          body: JSON.stringify(updated),
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data=>{
          setAula({
            _id: data._id,
            numDeAula:data.numDeAula,
            capacidad:data.capacidad,
            disponibilidad:data.disponibilidad
          })
          M.toast({html:'Información Actualizada'});
        })
      }catch(err){
        console.log(err)
      }
    }

    return (
        <React.Fragment>
            <div className="container">
              <div className=" row mt-4">
                {
                  editing ? (
                    <div className="flex-large col-md-6  col text-center" >
                      <EditAulaForm 
                        currentAula={currentAula}
                        updateAula={updateAula}
                        data={state.data}
                      />
                    </div>
                  ) 
                  : (
                    <div className=" flex-large col-md-6  col text-center">
                        <AddAulasForm 
                          addAula={addAula} 
                          data={state.data}
                        />
                    </div>
                  )
                }
                <div className="flex-large col-md-6 col text-center">
                    <AulaTable  
                        editRow={editRow}
                        deleteAula={deleteAula} 
                        data={state.data}
                    />
                </div>
              </div>
            </div>
        </React.Fragment>
    )
    
    
}

export default Aulas;
