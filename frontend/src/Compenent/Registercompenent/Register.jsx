import React ,{useState} from "react";
import axios from "axios";
import "./Register.css";
import {useNavigate, Link } from "react-router-dom";

import logo from "../Assets/logo.png"
const Register =()=>{
  const [nom_employee,setNom]=useState('');
  const[prenom_employee,setPrenom]=useState('');
  const[email,setEmail]=useState('');
  const[pdw_employee,setPdw]=useState('');
  const[message,setMessage]=useState('');
  const navigate=useNavigate();
  const handleRegister=async (e)=>{
    e.preventDefault();
    try{
      const response =await axios.post("http://localhost:8080/api/register",{nom_employee,prenom_employee,email,pdw_employee});
     
      if(response.status ===201){
       
        navigate('/authentification');
        alert("Vous etes bien inscrit ");
      }
    }catch(error){
      setMessage("L'enregistrement n'est pas fait");
    }

  };

    return(
    <div className="container">
      <div className="row justify-content-center">
         <div className="text-center">
                
             <img src={logo} alt="" width={150} height={100}/>
             <h4 className="mt-1 mb-1 pb-1" > 
                Centre Socio Culturel Tétouan     المركز السوسيو ثقافي بتطوان</h4> 
                    <hr className="line" />
            <h5 className="mt-1 mb-2 pb-1" >
                Espace d'assistant administratif      فضاء مساعد اداري
            </h5>
          </div>
          <br />
        <div className="col-md-4">
          <div className="card1">
          <h3 className="card-title text-center">Enregistrer</h3>
            <div className="card-body">
              {message && <div className="alert alert-info">{message}</div>}
              <br />
              <form onSubmit={handleRegister}>
                <div className="form-group">
               
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={nom_employee}
                    placeholder="Nom"
                    onChange={(e)=>setNom(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                
                  <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    value={prenom_employee}
                    placeholder="Prenom"
                    onChange={(e)=>setPrenom(e.target.value)}
                    required
                  />
                </div>
                
                <br />
                <div className="form-group">
                
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={pdw_employee}
                    onChange={(e)=>setPdw(e.target.value)}
                    placeholder="Mot de passe"
                    
                    required
                  />
                </div>
                <br />
                <h6>vous avez déjà enregister ?<Link to="/authentification" >Authentifier</Link></h6>
                
                
                <button  className="btn " type="submit">Creer  </button>
                      
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  
};
export default Register;