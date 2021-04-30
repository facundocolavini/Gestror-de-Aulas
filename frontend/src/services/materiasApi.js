import {baseurl, CONFIG} from "../utils/baseurl";
import axios from 'axios';
 
 
const MATERIAS_ENDPOINT = baseurl('Materias/');

console.log(MATERIAS_ENDPOINT)
 
export const getMaterias = async () => {
  try {
    const data = await axios.get(MATERIAS_ENDPOINT, CONFIG);
    console.log('Get');
    return data;
  } catch (err) {
    console.log(err);
  }
}; 
 
 
export  const postMaterias= async materias =>{
    const data = await axios.post(MATERIAS_ENDPOINT,materias, CONFIG);
    console.log('Post:',data);
    return data;
}

export const deleteMaterias = async id => {
  try {
    const data = await axios.delete(MATERIAS_ENDPOINT.concat(id), CONFIG);
    console.log('deleted:',data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

 
