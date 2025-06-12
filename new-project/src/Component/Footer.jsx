import React from 'react';
import { Container, Row, Col, Image, } from 'react-bootstrap';
const carBrands = [
  { name: 'Toyota', logo: 'https://logowik.com/content/uploads/images/647_toyota.jpg' },
  { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
  { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { name: 'Audi', logo: 'https://media.istockphoto.com/id/458093519/photo/audi-logo.jpg?s=612x612&w=0&k=20&c=QNKenVzJMYJxrqheQQa4bC_RRYTgfGX6pldDktUF4Dg=' },
  { name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg' },
  { name: 'Honda', logo: 'https://thumbs.dreamstime.com/b/honda-logo-icon-paper-texture-stamp-honda-motor-company-ltd-japanese-public-multinational-conglomerate-corporation-204759449.jpg' },
];

const Footer = () => {
  return (
    <footer className="bg-transparent text-white pt-4 pb-4 mt-5">
      <Container>
        <h5 className="text-center text-light mb-4">Our Top Car Brands</h5>
        <Row className="text-center">
          {carBrands.map((brand, index) => (
            <Col xs={6} sm={4} md={2} key={index} className="mb-3">
              <Image src={brand.logo} alt={brand.name} fluid style={{ maxHeight: '50px' }} />
              <div>{brand.name}</div>
            </Col>
          ))}
        </Row>

        <hr className="border-top border-light" />

        <Row className="text-center mb-3">
          <Col>
            {/* <a href="#" className="text-white mx-2"><Facebook /></a>
            <a href="#" className="text-white mx-2"><Twitter /></a>
            <a href="#" className="text-white mx-2"><Instagram /></a> */}
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4} className="mb-2">
            <h6>Contact Us</h6>
            <p>Email: faithnzenwata@gmail.com</p>
            <p>Phone: +234 8091036435</p>
          </Col>
          <Col md={4} className="mb-2">
            <h6>Quick Links</h6>
            <p><a href="#" className="text-white">Home</a></p>
            <p><a href="#" className="text-white">About Us</a></p>
            <p><a href="#" className="text-white">Rental Policies</a></p>
          </Col>
          <Col md={4} className="mb-2">
            <h6>Locations</h6>
            <p>Ikeja, Lagos</p>
            <p>Rumorla, River State</p>
            <p>Wuse, Abuja</p>
          </Col>
        </Row>
        <hr />

        <p className="text-center mb-0 mt-3">© {new Date().getFullYear()} CarRentals Co. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
