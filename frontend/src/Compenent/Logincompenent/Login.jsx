import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate,  } from "react-router-dom";


import axios from "axios";
import logo from "../Assets/logo.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [pdw_employee, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevents the form from refreshing the page
    
    try {
     const res=  await axios.post(`http://localhost:8080/api/login/${email}/${pdw_employee}`) 
        if(res.status===200){

          navigate("/dashboard");
        }else{
          alert("Email et mot de passe incorrecte");
        }
    } catch (err) {
      alert(err);
    }
  };

  return (

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
          <div className="card">
            <div className="card-body">
            
              <h3 className="card-title text-center">Authentification</h3>
              <br />
           
              <form onSubmit={handleLogin}>
                <div className="form-group">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                <i className="fa fa-key"></i>
              
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mot de passe"
                    value={pdw_employee}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <br />
                <h6>vous n'etes pas encore enregistré?  <Link to="/register" >Crer un compte </Link></h6>
              

                <button id="button" className="btn  btn-block  col-md-12" type="submit">Connexion  </button>
                      
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
