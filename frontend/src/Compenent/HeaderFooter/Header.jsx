import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

 const Header = () => {
    const REST_API_BASE_URL="http://localhost:8080/api";
    const navigate=useNavigate();
    const [showCancelModal, setShowCancelModal] = useState(false); // Manage modal visibility

    // Logout user
    const handleLogout = async () => {
      setShowCancelModal(true);
      try {
      await axios.post(`${REST_API_BASE_URL}/logout`);
      
   
      } catch (error) {
      console.error('Error logging out:', error);
      }
  };
    
  // Confirm cancel and navigate back
  const confirmCancel = () => {
    setShowCancelModal(false);
    navigate('/authentification');  // Redirect to login after logout
  };

  // Close modal without cancelling
  const handleCloseModal = () => {
    setShowCancelModal(false);
  };
  return (
    <header>
         
        <nav className="navbar navbar-expand-lg " >
          <div className="container-fluid">
            {/* Titre à gauche */}
            <a className="navbar-brand" href="#">
              Socio_Eklil
            </a>

            {/* Nav au centre */}
            <div className="mx-auto">
              <span className="navbar-text">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    <i class="fa fa-home fa-fw"aria-hidden="true"></i>
                      Acceuil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    <i class="fa fa-group"></i>
                      Participants
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    <i class="fa fa-book" aria-hidden="true"></i>
                      Livres
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    <i class="fa fa-calendar"></i>
                    
                      Evenements
                    </a>
                  </li>
                </ul>
              </span>
            </div>

            {/* Nav à droite */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogout}>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Deconnexion
                  
                </a>
              </li>
            </ul>
          </div>
            {/* Cancel Confirmation Modal */}
    <Modal show={showCancelModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes vous sur de vouloir vous déconnecter?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Non
          </Button>
          <Button variant="danger" onClick={confirmCancel}>
            Oui
          </Button>
        </Modal.Footer>
      </Modal>
        </nav>

    </header>
  )
};export default Header
