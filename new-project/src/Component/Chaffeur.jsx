import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const chauffeurs = [
  {
    name: 'Damilola Fidelis',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF--EQGOa45Fw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706171766758?e=2147483647&v=beta&t=Me1HoS-_tav-gNqFfT55c7dofi5GbEwaJoQupZqGYdI',
    description: 'Experienced chauffeur with 10+ years in luxury travel.',
    contact: 'mailto:john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGQNV_fM2FBhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719688240599?e=2147483647&v=beta&t=8TyfjIEiO_0w2Hm7Q8g9XCzCqSVbT0QeN7ZrmBzoIyo',
    description: 'Professional and punctual, known for impeccable service.',
    contact: 'mailto:jane.smith@example.com',
  },
  {
    name: 'Matilda Johnson',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGU9x5NEofxCQ/profile-displayphoto-shrink_200_200/B4DZQxtyRPGkAY-/0/1736000875872?e=2147483647&v=beta&t=cEHc3tMXk7SJ2gJi6oUAAws5Ekal82q0R_GaPxU6fog',
    description: 'Expert in city navigation and customer satisfaction.',
    contact: 'mailto:mark.johnson@example.com',
  },
];

const Chauffeur = () => {
  return (
    <section className="py-5 bg-transparent">
      <Container>
        <h2 className="text- text-white mb-4">Meet Our Chauffeurs</h2>
        <p className="text-center text-white mb-5">
          Our professional drivers ensure you travel in comfort, safety, and style.
        </p>
        <Row>
          {chauffeurs.map((chauffeur, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={chauffeur.image} />
                <Card.Body>
                  <Card.Title>{chauffeur.name}</Card.Title>
                  <Card.Text>{chauffeur.description}</Card.Text>
                  
                  <Button variant="danger" href={chauffeur.contact}>Contact</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Chauffeur;
