import React from 'react'
import DeliverableLogo from '../../assets/images/Deliverable.png'

const Header = () => {
  return (
    <header className="header">
      <img src={ DeliverableLogo } alt="Deliverable" />

      <div className="header__searchbar-container">
        <i className="ri-search-line"></i>
        <input placeholder="Busca por restaurante o tipo de comida"/>
      </div>

      <div className="header__buttons-container">
        <button className="btn btn--green">Ingresar</button>
        <button className="btn btn--red">Registrarme</button>
      </div>
    </header>
  )
}

export default Header
