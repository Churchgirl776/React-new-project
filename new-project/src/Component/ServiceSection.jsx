import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Service = [
  {
    title: "Luxury Car Rentals ⭐⭐⭐⭐",
    rating: 5,
    description: "Ride in style with our premium selection of luxury vehicles.",
    delivery: "Delivered to your doorstep with a full tank and polished interior.",
  },
  {
    title: "Affordable Daily Rentals ⭐⭐⭐⭐",
    rating: 4.5,
    description: "Perfect for errands, business, or short getaways.",
    delivery: "Pick-up available at multiple locations across the city.",
  },
  {
    title: "Chauffeur Services ⭐⭐⭐⭐",
    rating: 5,
    description: "Let our professional drivers get you there in comfort.",
    delivery: "Available on-demand or by reservation with real-time tracking.",
  },
  {
    title: "Long-term ⭐⭐⭐⭐",
    description: "Flexible leasing options for individuals and businesses.",
    delivery: "Hassle-free paperwork and easy monthly billing.",
  }
];

const ServiceSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-white mb-4">"Driven by Trust, Powered by Comfort"</h2>
      
      <Row>
        {Service.map((service, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm border-start border-4 border-primary animate__animated animate__fadeInUp">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                  <strong>What we offer:</strong> {service.description}
                </Card.Text>
                <Card.Text>
                  <strong>How it's rendered:</strong> {service.delivery}
                </Card.Text>
                <div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceSection;
