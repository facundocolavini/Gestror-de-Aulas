import {baseurl, CONFIG} from "../utils/baseurl";
import axios from 'axios';
 
const PROFESORES_ENDPOINT = baseurl('Profesores/');
console.log(PROFESORES_ENDPOINT);
 
export const getProfesores = async () => {
    try {
        const data = await axios.get(PROFESORES_ENDPOINT, CONFIG);
        console.log('Get');
        return data;
    }catch(err) {
        console.log(err);
    }
}; 
 
export const postProfesores = async profesor =>{
    const data = await axios.post(PROFESORES_ENDPOINT,profesor, CONFIG);
    console.log('Post:',data);
    return data;
}

export const deleteProfesores = async id => {
    try {
        const data = await axios.delete(PROFESORES_ENDPOINT.concat(id), CONFIG);
        console.log('deleted:',data);
        return data;
    }catch(err) {
        console.log(err);
    }
};

 
