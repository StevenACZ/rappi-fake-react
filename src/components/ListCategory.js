import React from 'react'
import { store } from '../data/store'
import ListItemCategory from './ListItemCategory'

const ListCategory = () => {
  const { categories } = store;

  return (
    <ul>
      {
        categories.map( category => (
          <ListItemCategory
            key={ category.name }
            { ...category }
          />
        ))
      }
    </ul>
  )
}

export default ListCategory
