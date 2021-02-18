import React from 'react'
import DeliverableLogo from '../../assets/images/Deliverable.png'

const Header = () => {
  return (
    <header className="header">
      <img src={ DeliverableLogo } alt="Deliverable" />

      <div>
        <input placeholder="Busca por restaurante o tipo de comida"/>
      </div>
      <i className="ri-search-line"></i>
      <div>
        <button>Ingresar</button>
        <button>Registrarme</button>
      </div>
    </header>
  )
}

export default Header
