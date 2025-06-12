import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

// List of luxury cars in our fleet
const luxuryCars = [
  {
    name: "Rolls Royce Phantom",
    description: "Unmatched elegance and luxury, ideal for weddings or VIP events.",
    image: "https://media.ed.edmunds-media.com/rolls-royce/phantom/2025/ot/2025_rolls-royce_phantom_f34_ot_32025_1280.jpg",
  },
  {
    name: "Lamborghini Aventador",
    description: "High-performance exotic car with an iconic presence.",
    image: "https://media.wired.com/photos/59b0197718550672e9fbdd40/3:2/w_2560%2Cc_limit/Lamborghini-Aventador-Roadster-TA.jpg",
  },
  {
    name: "Mercedes-Benz S-Class",
    description: "A perfect blend of comfort, technology, and style.",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/10853/1690451611932/front-left-side-47.jpg",
  },
  {
    name: "Bentley Continental GT",
    description: "A luxurious grand tourer with refined power and style.",
    image: "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/sp2smwkm2mz24tzwvbki.webp",
  },
  {
    name: "Ferrari 812 Superfast",
    description: "Thrilling speed and stunning Italian design.",
    image: "https://carlexdesign.com/wp-content/uploads/2024/02/FERRARI-812-SUPERFAST-EXTERIOR-06.jpg",
  },
  {
    name: "Range Rover Autobiography",
    description: "Luxury SUV with all-terrain capability and premium comfort.",
    image: "https://i.ytimg.com/vi/YDIPIQu1I0M/maxresdefault.jpg",
  },
];

const Fleet = () => {
  return (
    <Container className="my-5">
      {/* Title */}
      <h2 className="text-center mb-4">Our Luxury Fleet</h2>

      <Carousel interval={2000} indicators={true} controls={true} fade>
        {luxuryCars.map((car, idx) => (
          <Carousel.Item key={idx}>

            <img
              className="d-block w-100"
              src={car.image}
              alt={car.name}
              style={{ height: '500px', objectFit: 'cover', borderRadius: '10px' }}
            />

            {/* Text shown on top of the image */}
            <Carousel.Caption>
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Fleet;
