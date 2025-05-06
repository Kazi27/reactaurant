"use client"

import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("davesCart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("davesCart", JSON.stringify(cart))
  }, [cart])

  // Add item to cart
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name)

    if (existingItemIndex > -1) {
      // Item exists, increment quantity
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += 1
      setCart(updatedCart)
    } else {
      // Add new item to cart
      setCart([...cart, { ...item, quantity: 1 }])
    }

    // Show notification
    showNotification(`${item.name} added to cart!`)
  }

  // Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
  }

  // Increase item quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart]
    updatedCart[index].quantity += 1
    setCart(updatedCart)
  }

  // Decrease item quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart]
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1
      setCart(updatedCart)
    } else {
      removeFromCart(index)
    }
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
    showNotification("Cart cleared!")
  }

  // Calculate total items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Toggle cart sidebar
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  // Show notification
  const showNotification = (message) => {
    const notification = document.createElement("div")
    notification.className = "notification"
    notification.textContent = message

    document.body.appendChild(notification)

    // Trigger animation
    setTimeout(() => {
      notification.classList.add("show")
    }, 10)

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show")
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        toggleCart,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
