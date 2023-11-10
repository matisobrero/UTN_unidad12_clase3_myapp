import React from 'react'
import './Main.css'

function Main({producto}) {
  return (
<main className='principal'>  
    <h1>PRODUCTO DESTACADO</h1>
    <div className='container'>
        <div className="row">
            <div className="card mb-3 ">
                <img src={producto.imagen} className="card-img-top img-fluid imagen" alt="Imagen de producto"/>
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text texto">{producto.descripcion}</p>
                    <p className="card-text"><small className="text-body-secondary">SKU: {producto.sku}</small></p>
                </div>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{producto.disponible? 'Disponible' : 'Sin Stock'}</li>
                        <li className="list-group-item">Precio: $ {producto.precio}</li>
                    </ul>
                    <button type="button" className="btn btn-warning">Comprar</button>
                </div>
            </div>
        </div>
    </div>
</main>
  )
}

export default Main