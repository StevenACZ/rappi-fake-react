import React from 'react'
import ListItemRestaurant from './ListItemRestaurant'
import { store } from '../data/store'

const ListRestaurant = () => {
  const { restaurants } = store;

  return (
    <section className="list-restaurant">
      {
        restaurants.map( restaurant => (
          <ListItemRestaurant
            key={ restaurant.name }
            { ...restaurant }
          />
        ))
      }
    </section>
  )
}

export default ListRestaurant
