import { Link } from "react-router-dom"
import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import MenuItem from "../components/MenuItems"

const Menu = () => {
  // Menu data
  const menuData = {
    chicken: [
      {
        id: 1,
        name: "Spicy Grilled Chicken",
        price: 12.99,
        description: "Deliciously marinated with a spicy rub, grilled to perfection. Served with house-made sauce.",
        image: "/images/spicy_grilled_chicken.avif",
      },
      {
        id: 2,
        name: "Honey Garlic Chicken",
        price: 11.99,
        description:
          "Sweet and savory, our honey garlic chicken is a crowd pleaser. Glazed with our signature honey garlic sauce.",
        image: "/images/spicy_grilled_chicken.avif",
      },
      {
        id: 3,
        name: "Nashville Hot Tenders",
        price: 13.99,
        description:
          "Our famous chicken tenders coated in Nashville-style hot spices. Served with cooling ranch sauce.",
        image: "/images/tenders.avif",
      },
      {
        id: 4,
        name: "Classic Chicken Sandwich",
        price: 10.99,
        description: "Crispy chicken breast on a toasted brioche bun with pickles, coleslaw, and Dave's special sauce.",
        image: "/images/SANDWICH.avif",
      },
    ],
    sides: [
      {
        id: 5,
        name: "Seasoned Fries",
        price: 3.99,
        description: "Crispy fries seasoned with our signature spice mix. The perfect companion to our hot chicken.",
        image: "/images/seasoned_fries.avif",
      },
      {
        id: 6,
        name: "Garlic Bread",
        price: 2.5,
        description: "Freshly baked bread topped with garlic butter and herbs. Perfectly toasted to a golden crisp.",
        image: "/images/honey_garlic_chicken.avif",
      },
      {
        id: 7,
        name: "Loaded Nachos",
        price: 4.99,
        description: "Crispy nachos topped with jalapeños, salsa, and melted cheese. Add chicken for $2.50 extra.",
        image: "/images/nachos.avif",
      },
      {
        id: 8,
        name: "Sweet Potato Fries",
        price: 3.75,
        description: "Perfectly fried sweet potato fries with a hint of salt. Served with our signature dipping sauce.",
        image: "images/sweetfries.avif",
      },
      {
        id: 9,
        name: "Coleslaw",
        price: 2.99,
        description: "Freshly made with a tangy, creamy dressing. The perfect cool complement to our hot chicken.",
        image: "/images/coleslaw.avif",
      },
      {
        id: 10,
        name: "Mac & Cheese",
        price: 4.5,
        description: "Creamy, cheesy, and indulgent. Our signature mac & cheese is the ultimate comfort food.",
        image: "/images/maccheese.avif",
      },
    ],
    combos: [
      {
        id: 11,
        name: "Single Meal Combo",
        price: 14.99,
        description: "2 tenders or 1 sandwich with 1 side and a drink. Perfect for a satisfying meal.",
        image: "/images/single.avif",
      },
      {
        id: 12,
        name: "Vegetarian Delight",
        price: 12.99,
        description:
          "A delightful assortment of our vegetarian sides, including mac & cheese, coleslaw, and garlic bread.",
        image: "/images/vege.avif",
      },
      {
        id: 13,
        name: "Quick Snack Pack",
        price: 8.99,
        description: "2 tenders with 1 side. Snack-sized portions perfect for a quick bite.",
        image: "/images/quick.avif",
      },
      {
        id: 14,
        name: "Family Feast",
        price: 32.99,
        description: "8 tenders or 4 sandwiches with 3 regular sides. Perfect for sharing with family and friends.",
        image: "/images/fam.avif",
      },
    ],
    drinks: [
      {
        id: 15,
        name: "Fresh Lemonade",
        price: 2.5,
        description: "Refreshing lemonade made with freshly squeezed lemons. The perfect way to cool down the heat.",
        image: "/images/lemon.avif",
      },
      {
        id: 16,
        name: "Iced Tea",
        price: 2.0,
        description: "Classic iced tea, perfect for a hot day. Available sweetened or unsweetened.",
        image: "/images/iced.avif",
      },
      {
        id: 17,
        name: "Cold Brew Coffee",
        price: 3.0,
        description: "Smooth and bold cold brew, a great pick-me-up. Brewed for 24 hours for the perfect flavor.",
        image: "/images/cold.avif",
      },
      {
        id: 18,
        name: "Craft Beer",
        price: 5.0,
        description: "A selection of local craft beers. Ask your server about our rotating selection.",
        image: "/images/craft.avif",
      },
    ],
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <Container>
          <h1 className="display-4">Our Menu</h1>
          <p className="fs-5">Discover Nashville-style hot chicken at its finest</p>
        </Container>
      </section>

      {/* Heat Level Guide */}
      <section className="py-5 bg-white">
        <Container className="text-center">
          <h2 className="mb-4">Heat Level Guide</h2>
          <div className="d-flex justify-content-center flex-wrap gap-4 mb-4">
            <div className="heat-level">
              <div className="heat-indicator level-1"></div>
              <span>No Spice</span>
            </div>
            <div className="heat-level">
              <div className="heat-indicator level-2"></div>
              <span>Mild</span>
            </div>
            <div className="heat-level">
              <div className="heat-indicator level-3"></div>
              <span>Medium</span>
            </div>
            <div className="heat-level">
              <div className="heat-indicator level-4"></div>
              <span>Hot</span>
            </div>
            <div className="heat-level">
              <div className="heat-indicator level-5"></div>
              <span>Extra Hot</span>
            </div>
            <div className="heat-level">
              <div className="heat-indicator level-6"></div>
              <span>Reaper</span>
            </div>
          </div>
          <p className="text-muted fst-italic">Choose your preferred heat level for any chicken item</p>
        </Container>
      </section>

      {/* Menu Sections */}
      <section className="py-5 bg-light">
        <Container>
          <Tab.Container defaultActiveKey="chicken">
            <Nav className="justify-content-center mb-5 flex-wrap">
              <Nav.Item>
                <Nav.Link eventKey="chicken" className="mx-2 px-4 py-2 rounded-pill">
                  Chicken
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sides" className="mx-2 px-4 py-2 rounded-pill">
                  Sides
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="combos" className="mx-2 px-4 py-2 rounded-pill">
                  Combos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="drinks" className="mx-2 px-4 py-2 rounded-pill">
                  Drinks
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="chicken">
                <div className="text-center mb-5">
                  <h2 className="display-6">Chicken</h2>
                  <div
                    className="mx-auto"
                    style={{ height: "3px", width: "60px", backgroundColor: "var(--primary)" }}
                  ></div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {menuData.chicken.map((item) => (
                    <Col key={item.id}>
                      <MenuItem item={item} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="sides">
                <div className="text-center mb-5">
                  <h2 className="display-6">Sides</h2>
                  <div
                    className="mx-auto"
                    style={{ height: "3px", width: "60px", backgroundColor: "var(--primary)" }}
                  ></div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {menuData.sides.map((item) => (
                    <Col key={item.id}>
                      <MenuItem item={item} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="combos">
                <div className="text-center mb-5">
                  <h2 className="display-6">Meal Combos</h2>
                  <div
                    className="mx-auto"
                    style={{ height: "3px", width: "60px", backgroundColor: "var(--primary)" }}
                  ></div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {menuData.combos.map((item) => (
                    <Col key={item.id}>
                      <MenuItem item={item} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="drinks">
                <div className="text-center mb-5">
                  <h2 className="display-6">Drinks</h2>
                  <div
                    className="mx-auto"
                    style={{ height: "3px", width: "60px", backgroundColor: "var(--primary)" }}
                  ></div>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                  {menuData.drinks.map((item) => (
                    <Col key={item.id}>
                      <MenuItem item={item} />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <h2 className="display-5 mb-3">Ready to Order?</h2>
          <p className="fs-5 mb-4">Visit us today or order online for pickup or delivery</p>
          <Link to="/menu" className="btn btn-light btn-lg">
            Order Now
          </Link>
        </Container>
      </section>
    </>
  )
}

export default Menu