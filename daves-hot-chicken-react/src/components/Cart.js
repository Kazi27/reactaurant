"use client"

import { useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"
import { CartContext } from "../context/CartContext"

const Cart = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
  } = useContext(CartContext)

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const cartSidebar = document.querySelector(".cart-sidebar")
      const cartToggle = document.querySelector(".cart-toggle")

      if (
        cartSidebar &&
        isCartOpen &&
        !cartSidebar.contains(e.target) &&
        cartToggle &&
        !cartToggle.contains(e.target)
      ) {
        setIsCartOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCartOpen, setIsCartOpen])

  // Handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!")
      return
    }

    alert("Thank you for your order! This would normally proceed to payment processing.")
    clearCart()
    setIsCartOpen(false)
  }

  return (
    <div className={`cart-sidebar ${isCartOpen ? "active" : ""}`}>
      <div className="cart-header">
        <h3 className="m-0">Your Cart</h3>
        <Button variant="link" className="p-0 text-dark fs-4" onClick={() => setIsCartOpen(false)}>
          <FaTimes />
        </Button>
      </div>

      {cart.length === 0 ? (
        <div className="cart-items d-flex align-items-center justify-content-center">
          <p className="text-muted">Your cart is empty. Add some delicious items!</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item d-flex">
              <div className="cart-item-image me-3">
                <img src={item.image || "/placeholder.svg"} alt={item.name} />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1">{item.name}</h5>
                <p className="text-primary fw-bold mb-2">${item.price.toFixed(2)}</p>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-circle p-1"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </Button>
                  <span className="mx-2 fw-bold">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-circle p-1"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </Button>
                  <Button variant="link" className="ms-auto p-0 text-muted" onClick={() => removeFromCart(index)}>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold fs-5">Total:</span>
          <span className="fw-bold fs-5">${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" className="flex-grow-1" onClick={clearCart} disabled={cart.length === 0}>
            Clear Cart
          </Button>
          <Button variant="primary" className="flex-grow-1" onClick={handleCheckout} disabled={cart.length === 0}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
