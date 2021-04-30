import React,{useEffect,useState}  from 'react';
import{getReservas,deleteReservas} from "../services/reservasApi";
import ReservadaTable from '../components/ReservadaTable';
 

const Reservadas =()=>{
    const [state_Reservadas,setReservadas] =useState({data:[]});
 
    //Get data
    useEffect(  () => {
        const getData = async () => {
            const state_Reservadas = await getReservas();
            setReservadas(prevState => {
                return {...prevState, ...state_Reservadas};
            });
        };
        try {
            getData();
        } catch (err) {
            console.log(err);
        }
    }, []);

    //Eliminar Aula      
    const deleteReserva = (id,e)=>{
        setTimeout(window.location.reload(),1000);
        deleteReservas(id);
    }

    return (
        <React.Fragment>
            <div className="container">
              <div className=" row mt-4">
                <ReservadaTable deleteReserva={deleteReserva} data={state_Reservadas.data}/>          
              </div>
            </div>
        </React.Fragment>
    )
}

export default Reservadas;
