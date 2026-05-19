import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Navbar,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";

const Home = () => {

  const products = [
    {
      id: 1,
      name: "Apple iPhone 15",
      price: "₹79,999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 2,
      name: "Gaming Laptop",
      price: "₹65,000",
      image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 4,
      name: "Headphones",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ];

  return (
    <div>

      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">EcommerceWeb</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search products"
                className="me-2"
              />
              <Button variant="warning">Search</Button>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CAROUSEL */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="First slide"
            height="500"
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2>Big Fashion Sale</h2>
            <p>Up to 70% OFF on all products</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Second slide"
            height="500"
            style={{ objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h2>Latest Electronics</h2>
            <p>Best deals available now</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* CATEGORY SECTION */}
      <Container className="mt-5">

        <h2 className="text-center mb-4 fw-bold">
          Featured Products
        </h2>

        <Row>
          {products.map((product) => (
            <Col md={3} key={product.id} className="mb-4">

              <Card className="shadow-lg border-0 h-100 product-card">

                <Card.Img
                  variant="top"
                  src={product.image}
                  height="250"
                  style={{ objectFit: "cover" }}
                />

                <Card.Body className="text-center">

                  <Card.Title>
                    {product.name}
                  </Card.Title>

                  <h5 className="text-danger">
                    {product.price}
                  </h5>

                  <Button variant="dark" className="w-100">
                    Add to Cart
                  </Button>

                </Card.Body>
              </Card>

            </Col>
          ))}
        </Row>
      </Container>

      {/* OFFER SECTION */}
      <Container fluid className="bg-dark text-white mt-5 p-5 text-center">

        <h2>Special Offer</h2>

        <p className="fs-5">
          Free Delivery for Orders Above ₹999
        </p>

        <Button variant="warning">
          Shop Now
        </Button>

      </Container>

      {/* FOOTER */}
      <footer className="bg-secondary text-white text-center p-3">
        <p className="mb-0">
          © 2026 EcommerceWeb | All Rights Reserved
        </p>
      </footer>

    </div>
  );
};

export default Home;