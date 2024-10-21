import React ,{useState,useEffect} from "react";
import axios from 'axios';
import "./Dashboard.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png"
import livreimg from"../Assets/livre.webp";
import participantimg from "../Assets/participant.webp";
import evenementimg from "../Assets/eve.webp";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import livre from "../LivreComp/Livre";
import evenement from "../EvenementComp/Evenement";
import Header from '../HeaderFooter/Header';

const DashboardCompenent = () => {
    const[nom_employee,setNom_employee]=useState('');
    const[message,setMessage]=useState('');
  
    const REST_API_BASE_URL="http://localhost:8080/api";
    const fetchDashboard=async()=>{
        try{
            const response=await axios.get(`${ REST_API_BASE_URL}/dash`)
            setMessage(response.data);
            console.log(response.data);
            if(response.data.startWith('Bienvenu')){
                const employeeNom=response.data.split(' ')[1];
                setNom_employee(employeeNom);
            }
        }catch(error){
            setMessage("S'il vous plait faire l'authentification");
        }
    };
        // Call fetchDashboard when the component mounts
    useEffect(() => {
        fetchDashboard();
    }, []);

  return (
    <>
    <Header/>
   
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
            <h4>Bienvenu {nom_employee}</h4>
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
      </>
    
  );
};
export default DashboardCompenent;
