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
    <div>
      <img src={ img } alt="Platillo" />
      <div>
        <div>
          <h3>{ name }</h3>
          <div>
            <i>Star</i>
            <p>{ rate }</p>
          </div>
        </div>
        {
          categories.map( (category, index) => (
            <p key={ index }>{ category }</p>
          ))
        }
        <p><i>Reloj </i>{ time } minutos - Envio S/ { cost }</p>
      </div>
    </div>
  )
}

export default ListItemRestaurant
