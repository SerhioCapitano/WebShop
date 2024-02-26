import React from 'react'

const Item = (props) => {
  return (
    <div className="item">
      <img
        src={'./img/' + props.item.img}
        onClick={() => props.onShowItem(props.item)}
        alt={props.item.title + 'img'}
      />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}$</b>
      <div className="add-to-cart" onClick={() => props.addToOrder(props.item)}>
        +
      </div>
    </div>
  )
}

export default Item
