import React  from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png"
import livreimg from"../Assets/livre.webp";
import participantimg from "../Assets/participant.webp";
import evenementimg from "../Assets/eve.webp";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import livre from "../LivreComp/Livre";
import evenement from "../EvenementComp/Evenement";

const DashboardCompenent = () => {
  return (
    <div className="container">
     
        {/*
        <div className="row justify-content-center">
        {/* Body */}
         <div className="text-center">
                
             <img src={logo} alt="" width={150} height={100}/>
             <h4 className="mt-1 mb-1 pb-1" > 
                Centre Socio Culturel Tétouan     المركز السوسيو ثقافي بتطوان</h4> 
                    <hr className="line" />
            <h5 className="mt-1 mb-2 pb-1" >
                Espace d'assistant administratif      فضاء مساعد اداري
            </h5><br />
            <h4>Bienvenu </h4>
          </div>
          <br />
          <div className="container mt-5" id="card">
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card animated-card">
                        <img
                            src={participantimg}
                            className="card-img-top"
                            alt="Card 1"
                        />
                        <div className="card-body">
                            
                            <p className="card-text">
                                Liste des participants
                            </p>
                            <Link to="/participant" ><button className="btn btn-primary"> Consulter</button></Link>
                            
                           
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card animated-card">
                        <img
                        src={livreimg}
                            className="card-img-top"
                            alt="Card 2"
                        />
                        <div className="card-body">
                            
                            <p className="card-text">
                             Liste des livres
                            </p>
                            <a href={livre} className="btn btn-primary">
                                Consulter 
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card animated-card">
                        <img
                            src={evenementimg}
                            className="card-img-top"
                            alt="Card 3"
                        />
                        <div className="card-body">
                            
                            <p className="card-text">
                                Liste des évènements 
                            </p>
                            <a href={evenement} className="btn btn-primary">
                             Consulter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
           
          
      </div>
      
    
  );
};
export default DashboardCompenent;
