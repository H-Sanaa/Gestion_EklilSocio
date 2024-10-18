import React from 'react'

 const Header = () => {
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
                    <i class="fas fa-user-circle"></i>

                      Acceuil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                    <i class="fas fa-user-circle"></i>

                      Participants
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                  
                      Livres
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                
                      Evenements
                    </a>
                  </li>
                </ul>
              </span>
            </div>

            {/* Nav à droite */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Deconnexion
                  
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  )
};export default Header
