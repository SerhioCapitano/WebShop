import React from 'react'
import Item from './Item'

export const Items = (props) => {
  return (
    <main>
      {props.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          addToOrder={props.addToOrder}
          onShowItem={props.onShowItem}
        />
      ))}
    </main>
  )
}
