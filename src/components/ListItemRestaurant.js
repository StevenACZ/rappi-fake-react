import React from 'react'

const ListItemRestaurant = ({
  img,
  name,
  rate,
  categories,
  time,
  cost,
}) => {
  return (
    <div className="list-item-restaurant">
      <img src={ img } alt="Platillo" />

      <div className="list-item-restaurant__details">
        <div className="list-item-restaurant__details__header">
          <h3>{ name }</h3>
          <div className="list-item-restaurant__details__rate">
            <i class="ri-star-fill"></i>
            <p>{ rate }</p>
          </div>
        </div>

        <p className="list-item-restaurant__details__categories">
          {
            categories.join(' ')
          }
        </p>

        <p className="list-item-restaurant__details__extra-info">
          <i class="ri-time-line"></i>{ time } minutos - Envio S/ { cost }
        </p>
      </div>
    </div>
  )
}

export default ListItemRestaurant
