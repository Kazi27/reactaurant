"use client"

import { useContext, useState } from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../context/CartContext"
import Cart from "./Cart"

const Header = () => {
  const { getTotalItems, toggleCart } = useContext(CartContext)
  const [expanded, setExpanded] = useState(false)

  return (
    <header>
      <Navbar bg="white" expand="lg" className="shadow-sm py-3" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/images/logo.png" alt="Dave's Hot Chicken Logo" height="50" className="me-2" />
            <span className="fw-bold text-primary">Dave's Hot Chicken</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center order-lg-last">
            <div className="position-relative me-3">
              <Button variant="link" className="p-0 border-0" onClick={toggleCart} aria-label="View cart">
                <FaShoppingCart size={24} />
                {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
              </Button>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" className="mx-2" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/menu" className="mx-2" onClick={() => setExpanded(false)}>
                Menu
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="mx-2" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
            <Button variant="primary" className="d-none d-lg-block" onClick={() => (window.location.href = "/menu")}>
              Order Now
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Cart />
    </header>
  )
}

export default Header
