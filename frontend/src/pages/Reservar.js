import React,{useEffect,useState}  from 'react';
import{getAulas} from "../services/aulasApi";
import{getCursos} from "../services/cursosApi";
import{getMaterias} from "../services/materiasApi";
import{getProfesores} from "../services/profesoresApi";
import{postReservas,getReservas} from "../services/reservasApi";
import ReservarTable from '../components/ReservarTable';
import AddReservaForm from '../components/AddReservaForm';

const Reservar =()=>{

    const [state_Aulas,setAulas] =useState({data:[]});
    const [state_Cursos,setCursos] =useState({data:[]});
    const [state_Materias,setMaterias] =useState({data:[]});
    const [state_Profesores,setProfesores] =useState({data:[]});
    const [state_Reservas,setReserva] =useState({data:[]});

    //Get data
    useEffect(  () => {
      const getData = async () => {
          const state_Materias = await getMaterias();
          const state_Aulas = await getAulas();
          const state_Cursos = await getCursos();
          const state_Profesores = await getProfesores();
          const state_Reservas = await getReservas();

          setReserva(prevState => {
            return {...prevState, ...state_Reservas};
          });
          setProfesores(prevState => {
              return {...prevState, ...state_Profesores};
          });
          setCursos(prevState => {
              return {...prevState, ...state_Cursos};
          });
          setAulas(prevState => {
              return {...prevState, ...state_Aulas};
          });
          setMaterias(prevState => {
              return {...prevState, ...state_Materias};
          });
      };
      try {
          getData();
      } catch (err) {
          console.log(err);
      }
    }, []);

    const [currentReserva,setCurrentReserva] = useState({
      _id:null,
      numDeAula:'',
      capacidad:'',
      cantidadDeAlumnos:'',
      disponibilidad:'',
      curso:'',
      materia:'',
      docente:'',
      dia:'',
      turno:''
    });

    const editRow = (aula)=>{
        setCurrentReserva({
            _id:aula._id,
            numDeAula:aula.numDeAula,
            capacidad:aula.capacidad,
            disponibilidad:aula.disponibilidad,
        })
    }

    const addReserva = async (values) => {
        try {
        const response = await postReservas(values);
        console.log(response,'DATOS A POSTEAR');
        setReserva(prevState => {
            return {...prevState,
            data: [...prevState.data, values]
            };
        });

        } catch (err){
          console.log('salio mal el post');
        }
    };

    return (
        <React.Fragment>
          <div className="container">
            <div className=" row mt-4">
              <div className="flex-large col-md-9 col text-center mt-5 align-left">
                <AddReservaForm
                    aulas={state_Aulas.data}
                    cursos={state_Cursos.data}
                    materias={state_Materias.data}
                    profesor={state_Profesores.data}
                    currentReserva={currentReserva}
                    reservadas={state_Reservas.data}
                    addReserva ={addReserva}
                />
              </div>
              <div className="flex-large col-md-3 col text-center">
                <ReservarTable  
                  editRow={editRow}
                  data={state_Aulas.data}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Reservar;
