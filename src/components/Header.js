import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { Order } from './Order'
export const Header = (props) => {
  const [card, setCard] = useState(false)

  const showOrders = (props) => {
    let totalAmount = 0
    props.orders.forEach((el) => (totalAmount += Number.parseFloat(el.price)))
    return (
      <div>
        {props.orders.map((order) => (
          <Order key={order.id} item={order} deleteOrder={props.deleteOrder} />
        ))}
        <hr />
        <div className="total">
          Total : {new Intl.NumberFormat().format(totalAmount)}$
        </div>
      </div>
    )
  }
  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Goods not found!</h2>
      </div>
    )
  }
  return (
    <header>
      <div>
        <span className="logo">HOUSE STAFF</span>
        <ul className="nav">
          <li>Abous Us</li>
          <li>Contacts</li>
          <li>Shop</li>
        </ul>
        <FaShoppingBasket
          onClick={() => setCard(!card)}
          className={`shop-cart-button ${card && 'active'}`}
        />
        {card && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
        <div className="presentation"></div>
      </div>
    </header>
  )
}
