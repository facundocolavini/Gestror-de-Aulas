import {baseurl, CONFIG} from "../utils/baseurl";
import axios from 'axios';
 
 
const AULAS_ENDPOINT = baseurl('Aulas/');

console.log(AULAS_ENDPOINT)
 
export const getAulas= async () => {
  try {
    const data = await axios.get(AULAS_ENDPOINT, CONFIG);
    console.log('Get');
    return data;
  } catch (err) {
    console.log(err);
  }
}; 
 
 
export  const postAulas= async aula =>{
    const data = await axios.post(AULAS_ENDPOINT,aula, CONFIG);
    console.log('Post:',data);
    return data;
}

export const deleteAulas = async id => {
  try {
    const data = await axios.delete(AULAS_ENDPOINT.concat(id), CONFIG);
    console.log('deleted:',data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

 
