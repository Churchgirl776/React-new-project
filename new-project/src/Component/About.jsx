import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';


const AboutUs = () => {


  return (
    <Container fluid className="bg-transparent text-light py-5">
      <Row className="align-items-start flex-column-reverse flex-md-row">
        <Col xs={12} md={6} data-aos="fade-up">
          <Card className="bg-transparent border-0 text-light">
            <Card.Body>
              <Card.Title as="h2" className="mb-4">About Us</Card.Title>
              <Card.Text>
                At <strong>DriveNow Rentals</strong>, we believe in making car rentals easy, affordable, and reliable. 
                Whether you're planning a weekend getaway, a business trip, or simply need a vehicle for the day, 
                we've got you covered with a wide selection of cars and unbeatable customer service.
              </Card.Text>
              <Card.Text>
                Founded in 2020, our mission is to get you on the road quickly and comfortably. 
                With locations across the country and 24/7 customer support, 
                renting a car has never been simpler.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} data-aos="fade-left" className="text-center">
          {/* <Img 
            src= {RollRoyce} alt="Rolls Royce" className="img-fluid rounded"
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
