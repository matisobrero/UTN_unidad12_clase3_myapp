import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="py-3" >
      <div className="container2">
        <div className="row justify-content-center">
          <div className="col-sm-6" >
            <p>Telefono de atención al cliente (0123) 456789</p>
            <p>Siguenos en nuestras redes sociales</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="social-icons">
              <a href="https://www.facebook.com/" className="social-link">
                <i className="lab la-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" className="social-link">
                <i className="lab la-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" className="social-link">
                <i className="lab la-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="bg-light" />
            <p className="text-center">Derechos de autor © 2023. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer