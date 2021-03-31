import {baseurl, CONFIG} from "../utils/baseurl";
import axios from 'axios';
 
 
const CURSOS_ENDPOINT = baseurl('Cursos/');

console.log(CURSOS_ENDPOINT)
 
export const getCursos= async () => {
  try {
    const data = await axios.get(CURSOS_ENDPOINT, CONFIG);
    console.log('Get');
    return data;
  } catch (err) {
    console.log(err);
  }
}; 
 
 
export  const postCursos= async cursos =>{
    const data = await axios.post(CURSOS_ENDPOINT,cursos, CONFIG);
    console.log('Post:',data);
    return data;
}

export const deleteCursos = async id => {
  try {
    const data = await axios.delete(CURSOS_ENDPOINT.concat(id), CONFIG);
    console.log('deleted:',data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

 
