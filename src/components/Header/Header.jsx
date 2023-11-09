import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg "  >
        <div className="container">
        <a className="navbar-brand" href="/">MY-APP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
       </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            <a className="nav-link" href="/">Productos</a>
            <a className="nav-link" href="/">Ofertas</a>
            <a className="nav-link" href="/">Contactos</a>
            
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header