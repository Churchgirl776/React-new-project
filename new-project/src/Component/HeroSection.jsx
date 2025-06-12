import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="luxury-chauffeur-section text-white">
      <Container fluid className="p-5 bg-transparent text-center">
        {/* Header */}
        <Row>
          <Col xs={12}>
            <h2 className="display-5 fw-bold">AFFORDABLE LUXURY CHAUFFEURS IN NIGERIA.</h2>
            <p className="mt-3">
              A Nigeria-based Company. We Specialize in Elite Nigeria Airport Transfer and Chauffeur Services.
            </p>
          </Col>
        </Row>

        {/* Image */}
        <Row className="justify-content-center my-4">
          
        </Row>

        {/* Booking Form */}
        <Row className="justify-content-center">


          <Col xs={10} sm={8} md={6} lg={6}>
            <img
              src="https://images.hindustantimes.com/auto/img/2023/03/21/1600x900/rolls-royce-black_1679377493896_1679377772569_1679377772569.jpg"
              alt="Luxury Car"
              className="img-fluid"
            />
          </Col>


          <Col xs={12} sm={10} md={8} lg={6}>
            <ToggleButtonGroup
              type="radio"
              name="tripType"
              defaultValue={1}
              className="mb-3 d-flex justify-content-center"
            >
              <ToggleButton id="oneWay" variant="secondary" value={1}>
                One Way
              </ToggleButton>
              <ToggleButton id="hourly" variant="secondary" value={2}>
                Hourly
              </ToggleButton>
            </ToggleButtonGroup>

            <Form className="bg-secondary p-4 rounded">
              <Row className="mb-3">
                <Col xs={12} md={6} className="mb-2 mb-md-0">
                  <Form.Control type="text" placeholder="Pickup Location" />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="text" placeholder="Dropoff Location" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={6} className="mb-2 mb-md-0">
                  <Form.Control type="date" />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Control type="time" />
                </Col>
              </Row>
              <Button variant="light" className="w-100">
                Book Now
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
