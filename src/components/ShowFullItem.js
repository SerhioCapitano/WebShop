import React from 'react'

export const ShowFullItem = (props) => {
  return (
    <div className="full-item">
      <div>
        <img
          src={'./img/' + props.item.img}
          onClick={() => props.onShowItem(props.item)}
          alt={props.item.title + 'img'}
        />
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <b>{props.item.price}$</b>
        <div
          className="add-to-cart"
          onClick={() => props.addToOrder(props.item)}>
          +
        </div>
      </div>
    </div>
  )
}
