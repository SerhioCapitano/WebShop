import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Items } from './components/Items'
import { Categories } from './components/Categories'
import { ShowFullItem } from './components/ShowFullItem'

function App() {
  const [orders, setOrders] = useState([])
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Chair',
      img: 'chair.jpg',
      desc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      category: 'chairs',
      price: '49.99',
    },
    {
      id: 2,
      title: 'Table',
      img: 'table.jpg',
      desc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      category: 'tables',
      price: '80.51',
    },
    {
      id: 3,
      title: 'Sofa',
      img: 'sofa.jpg',
      desc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      category: 'sofas',
      price: '400',
    },
    {
      id: 4,
      title: 'Bed',
      img: 'bed.jpg',
      desc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      category: 'beds',
      price: '500',
    },
    {
      id: 5,
      title: 'Living Room',
      img: 'living room.jpg',
      desc: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      category: 'livin room',
      price: '2000.99',
    },
  ])
  const [currentItems, setCurrentItems] = useState(items)
  const [fullItem, setFullItem] = useState({})
  const [showFullItem, setShowFullItem] = useState(false)

  const addToOrder = (item) => {
    let isInArray = false
    orders.forEach((order) => {
      if (item.id === order.id) isInArray = true
    })
    if (!isInArray) setOrders([...orders, item])
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id))
  }

  const chooseCategory = (category) => {
    if (category === 'all') {
      setCurrentItems(items)
    } else setCurrentItems(items.filter((el) => el.category === category))
  }

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(!showFullItem)
  }

  return (
    <div className="wrapper">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        items={currentItems}
        orders={orders}
        addToOrder={addToOrder}
        onShowItem={onShowItem}
      />
      {showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          item={fullItem}
          addToOrder={addToOrder}
        />
      )}
    </div>
  )
}

export default App
