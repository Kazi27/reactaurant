"use client"

import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(item)
  }

  return (
    <Card className="menu-item h-100 shadow-sm">
      <div className="menu-item-image">
        <Card.Img variant="top" src={item.image} alt={item.name} />
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-baseline mb-2">
          <Card.Title as="h5">{item.name}</Card.Title>
          <span className="text-primary fw-bold">${item.price.toFixed(2)}</span>
        </div>
        <Card.Text className="mb-4">{item.description}</Card.Text>
        <Button variant="primary" className="mt-auto" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MenuItem
