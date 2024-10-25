import React, { useState,useEffect } from 'react';
import Header from '../HeaderFooter/Header';
import axios from 'axios';
import "./Livre.css";
const Livre = () => {
  const [livres,setLivres]=useState([]);
  const REST_API_BASE_URL="http://localhost:8080/api/livre";
  const listLivre=()=>axios.get(REST_API_BASE_URL);
 
  useEffect(()=>{
    
    getAllLivre();
  
 },[])
 function getAllLivre(){
  listLivre().then((response)=>{
    setLivres(response.data);
  
  
}).catch(error=>(
  console.error(error)
  ))
}


  
  return (
    <>
     <Header/>
     <div className="container ">
      <br />
        <h3 className="text-center">Liste des Livres</h3>
        <br />
        <button type="button" class="btn btn-primary mb-2">
        <i class="fa fa-plus"></i> </button>
        <br />
        <div className="livre-container">
      {livres.map((livre) => (
        
        <div key={livre.id_livre} className="livre-card">
          <img 
            src={`data:image/jpeg;base64,${livre.photo}`} 
            alt={livre.nom_livre} 
            className="livre-image" 
          />
         
          <div className="livre-hover-info">
            <p>Auteur: {livre.nom_auteur}</p>
            <p>Année d'ajout: {livre.annee} </p>
            <p>Code :{livre.livre_code} </p>
           <p> <button type="button" className="btn btn-danger" ><i class="fa fa-trash-o"></i></button>
            <button type="button" className="btn btn-warning"><i class="fa fa-pencil" aria-hidden="true"></i>
            </button></p>
          </div>
        </div>
      ))}
    </div>
      </div>


    
    




    </>
  )
}

export default Livre