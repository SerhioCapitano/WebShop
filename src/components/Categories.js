import React from 'react'

export const Categories = (props) => {
  const categories = [
    {
      key: 'all',
      name: 'All',
    },
    {
      key: 'chairs',
      name: 'Chairs',
    },
    {
      key: 'sofas',
      name: 'Sofas',
    },
    {
      key: 'beds',
      name: 'Beds',
    },
    {
      key: 'tables',
      name: 'Tables',
    },
    {
      key: 'livin room',
      name: 'Living Rooms',
    },
  ]
  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  )
}
