import React from "react"; 
import Navigation from '../components/Navigation';
import Reservar from '../pages/Reservar';
import Reservadas from '../pages/Reservadas';
import Aulas from '../pages/Aulas';
import Cursos from '../pages/Cursos';
import{BrowserRouter as Router,Route} from 'react-router-dom';


const LandingPage = props => {
  return(
    <Router>
      <Navigation/>
      <Route path="/aulas"><Aulas/></Route>
      <Route path="/cursos"><Cursos/></Route>
      <Route path="/reservar"><Reservar/></Route>
      <Route path="/reservadas"><Reservadas/></Route>
    </Router>
  )
};
  
export default LandingPage;