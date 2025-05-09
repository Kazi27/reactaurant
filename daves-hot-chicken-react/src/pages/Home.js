import { Container, Row, Col, Card } from "react-bootstrap"
import { FaFire, FaDrumstickBite, FaClock } from "react-icons/fa"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/images/hero1.jpg')" }}>
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1>
            What Happens In <span>DAVE'S</span> <br />
            Stays In Dave's
          </h1>
          <p className="fs-4 mb-4">Explore the taste of our legendary hot chicken</p>
          <Link to="/menu" className="btn btn-primary btn-lg">
            View Our Menu
          </Link>
        </Container>
      </section>

      {/* Featured Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="featured-item text-center h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <div className="featured-icon text-primary">
                    <FaFire />
                  </div>
                  <Card.Title as="h3">Spice Levels</Card.Title>
                  <Card.Text>From No Spice to Reaper, customize your heat level</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4 mb-md-0">
              <Card className="featured-item text-center h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <div className="featured-icon text-primary">
                    <FaDrumstickBite />
                  </div>
                  <Card.Title as="h3">Fresh Quality</Card.Title>
                  <Card.Text>All chicken is fresh, never frozen, and prepared daily</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="featured-item text-center h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <div className="featured-icon text-primary">
                    <FaClock />
                  </div>
                  <Card.Title as="h3">Quick Service</Card.Title>
                  <Card.Text>Fast service without compromising on quality</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Feature Section */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%), url(/images/hero2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <h2 className="display-4 mb-4">
                Nashville-Style
                <br />
                Hot Chicken
              </h2>
              <p className="fs-5 mb-4">Hand-breaded and infused with our signature spice blends</p>
              <Link to="/menu" className="btn btn-primary">
                Explore Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5">About Us</h2>
            <div className="mx-auto" style={{ height: "3px", width: "60px", backgroundColor: "var(--primary)" }}></div>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <p className="mb-4">
                Founded in 2017 in the heart of Hollywood, Dave's Hot Chicken started as a simple pop-up in a parking
                lot, quickly becoming a cultural phenomenon with a cult following. Our founder, Chef Dave, began with a
                passion for bold flavors and a simple mission: to serve the best hot chicken outside of Nashville.
              </p>
              <p className="mb-4">
                Each piece of our chicken is expertly cooked to perfection, using a secret blend of spices that has been
                meticulously crafted to ensure every bite is as memorable as the last. Our signature dish, the "Fire
                Fowl Slider", combines crispy chicken with coleslaw and pickles, all drizzled with Dave's special sauce,
                creating a taste sensation that keeps our fans coming back for more.
              </p>
              <p className="mb-4">
                At Dave's Hot Chicken, we are committed to more than just great food. Our mission is to serve our
                community by providing a friendly, vibrant atmosphere where everyone can enjoy a meal and feel like part
                of the Dave's family. Whether you're a heat seeker or just chicken-curious, we promise an experience
                that's not just delicious but truly unforgettable.
              </p>
              <p>
                Join us and experience why "What Happens In DAVE'S, Stays In Dave's" isn't just a slogan—it's a
                lifestyle.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <h2 className="display-5 mb-3">Ready to Experience the Heat?</h2>
          <p className="fs-5 mb-4">Visit us today or order online for pickup or delivery</p>
          <Link to="/menu" className="btn btn-light btn-lg">
            Order Now
          </Link>
        </Container>
      </section>
    </>
  )
}

export default Home
