import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="d-flex flex-column align-items-start">
              <img src="/daveshotchickenlogo.png" alt="Dave's Hot Chicken Logo" height="50" className="mb-3" />
              <span className="fs-5 fw-bold">Dave's Hot Chicken</span>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3 border-bottom pb-2 border-danger">Location</h5>
            <p>📍 61-45 188th St, Fresh Meadows, NY 11365</p>
            <p>
              📞{" "}
              <a href="tel:+13474941940" className="text-white">
                (347) 494-1940
              </a>
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3 border-bottom pb-2 border-danger">Hours</h5>
            <p>Open Daily: 11 AM - 11 PM</p>
          </Col>

          <Col lg={3} md={6}>
            <h5 className="mb-3 border-bottom pb-2 border-danger">Connect</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/ToLiveandFryInLA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/daveshotchicken/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@daveshotchicken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaTiktok />
              </a>
            </div>
          </Col>
        </Row>

        <div className="text-center pt-4 border-top border-secondary">
          <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Dave's Hot Chicken. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
