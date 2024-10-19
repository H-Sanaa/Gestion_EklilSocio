
import React ,{useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Participant = () => {
    const[participants,setParticipants]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const REST_API_BASE_URL="http://localhost:8080/api/participant";
    const listParticipant=()=>axios.get(REST_API_BASE_URL);
    const deleteParticipant=(participantid)=>axios.delete(REST_API_BASE_URL+'/'+participantid);
    const navigate=useNavigate();
  
   useEffect(()=>{
    
      getAllParticipant();
    
   },[])

   function getAllParticipant(){
      listParticipant().then((response)=>{
        setParticipants(response.data);
      
      
    }).catch(error=>(
      console.error(error)
      ))
    }
   function ajouter_participant(){
    navigate("/ajouter");
   }
   function supprimer_participant(id){
      deleteParticipant(id).then((response)=>{
        toast.success("Participant supprimé avec succès",{style:{ color: "red"}});
        getAllParticipant();

      }).catch(error=>{
        toast.error("Une erreur s'est produite.",{style:{
          backgroundColor: "red", // Couleur de fond (vert)
          color: "#ffffff",           // Couleur du texte (blanc)
        }});
        console.error(error);
      })
      
   }
   function modifier_participant(id){
    navigate(`/modifier/${id}`)
   }
   
      // States to manage current page and rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(participants.length); 

  // Calculate indices for slicing the list
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentItems = participants.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total pages
  const totalPages = Math.ceil(participants.length / rowsPerPage);
   // Handlers for pagination
   const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page when rows per page changes
  };
  
  

  return (
    <div >
         
       <br />
        <div className='container'>
       <h3  className='text-center'>Liste des Participants </h3>
       <br />
       <br />
       <div className="row mb-1 justify-content-between">
       <div className='col-auto'>
       <button type="button" class="btn btn-primary mb-2" onClick={ajouter_participant}>
       <i class="fa fa-user-plus"></i> </button>
       </div>
       
       <div className="col-auto">
          <div className="input-group">
            <div className="form-outline">
              <input
                id="search-input"
                type="search"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Rechercher"
              />
              
            </div>
            <button
              id="search-button"
              type="button"
              className="btn btn-primary"  
            >
          <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          </div>
    
      <div className="col-auto d-flex align-items-center"> {/* Use d-flex for horizontal alignment */}
        <label htmlFor="" className="me-1"><h6 className='page-item'>Lignes</h6></label>
        <select className="form-select" value={rowsPerPage} onChange={handleRowsChange}>
        <option value={participants.length}>ALL</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
    </div>
  

       <table className='table table-striped table-bordered'>
        <thead className='text-center table-primary'>
            <tr>
                
                <th>Nom </th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Statu</th>
                <th>Choix</th>
                <th>Action</th>
        
            </tr>

        </thead>
        <tbody className='text-center'>
        {
    currentItems.length > 0 ? (
      currentItems.filter((participant)=>{
        return searchTerm.toLowerCase()==='' || 
        participant.nom.toLowerCase().includes(searchTerm.toLowerCase())
        ?participant
        :participant.nom.toLowerCase().includes(searchTerm);
       }).map(participant => (
        <tr key={participant.id}>
          <td>{participant.nom}</td>
          <td>{participant.prenom}</td>
          <td>{participant.email}</td>
          <td>{participant.statu}</td>
          <td>{participant.choix}</td>
          <td>
            <button type="button" className="btn btn-danger" onClick={() => supprimer_participant(participant.id)}>     <i class="fa fa-trash-o"></i></button>
            <button type="button" className="btn btn-info" onClick={() => modifier_participant(participant.id)}><i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button type="button"  className="btn btn-secondary" onClick={() => modifier_participant(participant.id)}><i class="fa fa-floppy-o" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      ))
    ) : (
      
      <tr>
        
        <td colSpan="6" className="text-center">Aucun participant trouvé</td>
      </tr>
    )
  }
          {/* {
            currentItems.filter(()=>{
              return filteredParticipants;
            }).map(participant=>
              <tr key={participant.id}>
                <td>{participant.nom}</td>
                <td>{participant.prenom}</td>
                <td>{participant.email}</td>
                <td>{participant.statu}</td>
                <td>{participant.choix}</td>
                <td>
                <button type="button" class="btn btn-danger " onClick={()=>supprimer_participant(participant.id)}>Supprimer </button>
                <button type="button" class="btn btn-info " onClick={()=>modifier_participant(participant.id)}>Modifier </button>
                </td>
              </tr>
            )
          } */}

        </tbody>

       </table>
       <div aria-label='...'>
      
  <ul className='pagination pagination-sm justify-content-end'>
    <li className='page-item' style={{ background: "AliceBlue" }}>
      <a
        href='#'
        onClick={handlePreviousPage}
        className='page-link'
        disabled={currentPage === 1}
      >
        <span>Précédent</span>
      </a>
    </li>
    <li className='page-item'>
      <a href="#" className='page-link'>{currentPage}</a>
    </li>
    <li className='page-item'>
      <a href="#" className='page-link'>{totalPages}</a>
    </li>
    <li className='page-item'>
      <a
        href="#"
        onClick={handleNextPage}
        className='page-link'
        disabled={currentPage === totalPages}
      >
        Suivant
      </a>
    </li>
  </ul>

  

        
        

       </div>
       

     
      </div>
      <div>
        
      
     
   
       </div>
    </div>
  )
}

export default Participant