"use client"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    alert("Thank you for your message! We will get back to you soon.")
    e.target.reset()
  }

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <Container>
          <h1 className="display-4">Contact Us</h1>
          <p className="fs-5">We'd love to hear from you!</p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {/* Contact Information */}
            <Col lg={5}>
              <Row className="g-4">
                <Col xs={12}>
                  <Card className="contact-card shadow-sm h-100">
                    <Card.Body className="p-4">
                      <div className="contact-icon text-primary">
                        <FaMapMarkerAlt />
                      </div>
                      <Card.Title as="h3">Our Location</Card.Title>
                      <Card.Text>61-45 188th St, Fresh Meadows, NY 11365</Card.Text>
                      <Card.Text className="text-muted small">Located in: Fresh Meadows Place</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12}>
                  <Card className="contact-card shadow-sm h-100">
                    <Card.Body className="p-4">
                      <div className="contact-icon text-primary">
                        <FaPhone />
                      </div>
                      <Card.Title as="h3">Phone Number</Card.Title>
                      <Card.Text>
                        <a href="tel:+13474941940" className="text-dark">
                          (347) 494-1940
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={12}>
                  <Card className="contact-card shadow-sm h-100">
                    <Card.Body className="p-4">
                      <div className="contact-icon text-primary">
                        <FaClock />
                      </div>
                      <Card.Title as="h3">Hours of Operation</Card.Title>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Monday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Tuesday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Wednesday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Thursday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Friday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Saturday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Sunday:</span>
                        <span>11 AM–11 PM</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* Contact Form */}
            <Col lg={7}>
              <Card className="shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <h2 className="mb-2">Send Us a Message</h2>
                  <p className="text-muted mb-4">
                    Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number (Optional)</Form.Label>
                      <Form.Control type="tel" placeholder="Your phone number" />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Your message" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" className="w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6">Find Us</h2>
            <div className="mx-auto" style={{ height: "3px", width: "60px", backgroundColor: "var(--primary)" }}></div>
          </div>
          <div className="rounded overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095854716!2d-73.79385872346847!3d40.73376597138293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260d9b329d915%3A0x5d2cb4f95c9c3d87!2s61-45%20188th%20St%2C%20Fresh%20Meadows%2C%20NY%2011365!5e0!3m2!1sen!2sus!4v1710186642146!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dave's Hot Chicken Location"
            ></iframe>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <Container>
          <h2 className="display-5 mb-3">Ready to Experience the Heat?</h2>
          <p className="fs-5 mb-4">Visit us today or order online for pickup or delivery</p>
          <Button variant="light" size="lg" href="/menu">
            Order Now
          </Button>
        </Container>
      </section>
    </>
  )
}

export default Contact
