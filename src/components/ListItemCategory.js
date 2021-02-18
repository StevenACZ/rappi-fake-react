import React from 'react'

const ListItemCategory = ({
  name,
  selected
}) => {
  return (
    <li className={ selected ? 'selected' : '' }>{ name }</li>
  )
}

export default ListItemCategory
