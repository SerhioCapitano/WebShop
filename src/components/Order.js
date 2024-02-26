import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const Order = (props) => {
  return (
    <div className="item">
      <img
        src={'./img/' + props.item.img}
        // onClick={() => props.onShowItem(this.props.item)}
        alt={props.item.title + 'img'}
      />
      <h2>{props.item.title}</h2>
      <b>{props.item.price}$</b>
      <FaTrash
        className="delete-icon"
        onClick={() => props.deleteOrder(props.item.id)}
      />
    </div>
  )
}
