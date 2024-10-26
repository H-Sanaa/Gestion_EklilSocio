import React,{useEffect, useState}  from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal, Button } from 'react-bootstrap';
import Header from '../HeaderFooter/Header';


 const Ajouter = () => {
 
    //connect to my REST API to create a participant
    const REST_API_BASE_URL="http://localhost:8080/api/participant/ajouter";
    const createParticipant=(participant)=>axios.post(REST_API_BASE_URL,participant);

     //connect to my REST API to get the information about a participant
     const api="http://localhost:8080/api/participant";
     const getParticipantById=(participantid)=>axios.get(api+'/'+participantid);
     const updateParticipants=(participantid,participant)=>axios.put(api+'/'+participantid,participant);
     // id
    const {id}=useParams();
    const navigate=useNavigate();
   
    
    // define state variables using useState hook (for creating)
    const[nom,setNom]=useState('');
    const[prenom,setPrenom]=useState('');
    const[email,setEmail]=useState('');
    const[statu,setStatu]=useState('');
    const[choix,setChoix]=useState([]);
     //convert the array choix to string
    const joinedChoix=choix.join(' ');
    const [showCancelModal, setShowCancelModal] = useState(false); // Manage modal visibility

    useEffect(()=>{
        if(id){
            console.log("Participant ID:", id);
            getParticipantById(id).then((response)=>{
                setNom(response.data.nom);
                setPrenom(response.data.prenom);
                setEmail(response.data.email);
                setStatu(response.data.statu);
                setChoix(response.data.choix.split(','));
            }).catch(error=>{
                console.error(error);
            })
        }

    },[id])
    

     const saveorupdateParticipant=(e)=>{
        e.preventDefault();
        const participant={nom,prenom,email,statu,choix:joinedChoix};
        if(id){
            updateParticipants(id,participant).then((response)=>{
                console.log(response.data);
                navigate('/participant');
                toast.success("Participant modifer avec succès !",{style:{
                  backgroundColor: "green", // Couleur de fond (vert)
                  color: "black",           // Couleur du texte (blanc)
                }});
            }).catch(error=>(
                console.error(error)
                ))
        }
       else{
        console.log(participant)
        createParticipant(participant).then((response)=>{
            console.log(response.data);
            navigate('/participant');
            toast.success("Participant ajouter avec succès !",{style:{
              backgroundColor: "green", // Couleur de fond (vert)
              color: "#black",           // Couleur du texte (blanc)
            }});
        }).catch(error=>(
            console.error(error)
            ))}
     }
     const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          setChoix([...choix,' ', value]); // Add checked value to array
        } else {
          setChoix(choix.filter((item) => item !== value)); // Remove unchecked value
        }
      }

      // Show the cancel confirmation modal
  const handleCancel = () => {
    setShowCancelModal(true);
  };

  // Confirm cancel and navigate back
  const confirmCancel = () => {
    setShowCancelModal(false);
    navigate("/participant"); // Navigate back to the participant list
  };

  // Close modal without cancelling
  const handleCloseModal = () => {
    setShowCancelModal(false);
  };

      function pageTitle(){
        if(id){
            return <h3 className=" text-center mb-2">Modifier un  participant</h3>;

        }else{
            return <h3 className=" text-center mb-2">Ajouter un nouveau participant</h3>;
        }
      }

  return (
    <>
      <Header/>

    <fieldset className="container">
        <br />
       {
    pageTitle()
      }
    <br/>
    <div className="col-md-6 mb-3">
    <Link to='/participant'> <button type="button" class="btn btn-secondary"><i class="fa fa-arrow-left" aria-hidden="true"></i>
    </button></Link>
      </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="nom" className="form-label">Nom*:</label>
        <input type="text" id="nom" className="form-control" placeholder="Entrer le nom" value={nom} onChange={(event)=>setNom(event.target.value)}/>
      </div>
  
      <div className="col-md-6 mb-3">
        <label htmlFor="prenom" className="form-label">Prénom*:</label>
        <input type="text" id="prenom" className="form-control" placeholder="Entrer le prénom" value={prenom} onChange={(event)=>setPrenom(event.target.value)}/>
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-6 mb-3">
        <label htmlFor="email" className="form-label">Email*:</label>
        <input type="email" id="email" className="form-control" placeholder="Entrer l'email" value={email} onChange={(event)=>setEmail(event.target.value)} />
      </div>
  
      <div className="col-md-6 mb-3">
        <label htmlFor="statu" className="form-label"  >Statut*:</label>
        <select id="statu" className="form-select" value={statu} onChange={(event)=>setStatu(event.target.value)}>
          <option value="">Sélectionner un statut</option>
          <option value="Étudiant">Étudiant</option>
          <option value="Fonctionnaire">Fonctionnaire</option>
        </select>
       
      </div>
    </div>
  
    <div className="row">
      <div className="col-md-12 mb-3">
        <label className="form-label">Choix d'inscription*:</label><br />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="bibliotheque" value="Bibliothèque"  checked={choix.includes("Bibliotheque")}
           onChange={handleCheckboxChange} />
          <label className="form-check-label" htmlFor="bibliotheque">Bibliothèque</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="theatre" value="Théâtre"  
           checked={choix.includes("Théâtre")} onChange={handleCheckboxChange}/>
          <label className="form-check-label" htmlFor="theatre">Théâtre</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="music" value="Music"  checked={choix.includes("Music")}  onChange={handleCheckboxChange} />
          <label className="form-check-label" htmlFor="music">Music</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="art" value="Art" checked={choix.includes("Art")}
            onChange={handleCheckboxChange}  />
          <label className="form-check-label" htmlFor="art">Art</label>
        </div>
      </div>
    </div>
    <p>Inscriptions sélectionnées: {choix}</p>
    <div className="col-md-12 mb-3 d-flex justify-content-center" >
  <button type="submit" className="btn btn-success" onClick={saveorupdateParticipant}
  style={{ width: '20%' }}>Enregistrer</button>
   <button type="submit" className="btn btn-danger" onClick={handleCancel}
  style={{ width: '20%' }}>Annuler</button>



    {/* Cancel Confirmation Modal */}
    <Modal show={showCancelModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes-vous sûr de vouloir annuler ? Toutes les modifications non enregistrées seront perdues.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Non
          </Button>
          <Button variant="danger" onClick={confirmCancel}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
</div>

  </fieldset>
  </>
        
    
  )
};export default Ajouter;
