
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Register from './Compenent/Registercompenent/Register';
import Login from './Compenent/Logincompenent/Login';
import Dashboard from './Compenent/DashbordComp/Dashboard'
import Participant from './Compenent/ParticipantComp/Participant';
import  Ajouter  from './Compenent/ParticipantComp/Ajouter';
import Livre from './Compenent/LivreComp/Livre';

import Footer from './Compenent/HeaderFooter/Footer';


function App() {


 
  
  return (
    <div>
   
    <Router>
    <ToastContainer />
     
      <Routes>
     
        <Route path='/register' element={<Register/>}/>
        <Route path='/authentification' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/participant' element={<Participant/>}/>
        <Route path='/ajouter' element={<Ajouter/>}/>
        <Route path='/modifier/:id' element={<Ajouter/>}/>
        <Route path='/livre' element={<Livre/>}/>
        


      </Routes>
      
    </Router>
    <Footer/>
    </div>
     
    
    
  );
}

export default App;
