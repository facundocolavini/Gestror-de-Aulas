import {baseurl, CONFIG} from "../utils/baseurl";
import axios from 'axios';
 
 
const RESERVAS_ENDPOINT = baseurl('Reservas/');

console.log(RESERVAS_ENDPOINT)
 
export const getReservas= async () => {
  try {
    const data = await axios.get(RESERVAS_ENDPOINT, CONFIG);
    console.log('Get');
    return data;
  } catch (err) {
    console.log(err);
  }
}; 
 
 
export  const postReservas= async reserva =>{
    const data = await axios.post(RESERVAS_ENDPOINT,reserva, CONFIG);
    console.log('Post:',data);
    return data;
}

export const deleteReservas = async id => {
  try {
    const data = await axios.delete(RESERVAS_ENDPOINT.concat(id), CONFIG);
    console.log('deleted:',data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

 
