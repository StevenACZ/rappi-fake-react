import React from 'react'

const ListItemCategory = ({
  name,
  selected
}) => {
  return (
    <li className={ selected ? 'list-item-category selected' : 'list-item-category' }>{ name }</li>
  )
}

export default ListItemCategory
