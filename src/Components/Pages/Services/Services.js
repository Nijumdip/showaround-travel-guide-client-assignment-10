import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
   
  return (
    <Container className="d-flex my-5 justify-content-center align-items-center">
    <Row xs={1} md={3} className="g-4">
      {
        services.map((service) =><Col key={service.id} >
        <Card style={{height:'650px'}} className="d-flex flex-column justify-content-center align-items-center ">
          <div>
            <img
              className="m-3 rounded-3"
              variant="top"
              src={service.img}
              width="330px"
              height="330px"
              alt="img not found"
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center ">
          <h3>{service.name}</h3>
          <p className="mx-3">{service.description}</p>
          <p>Price : $ {service.price}</p>
        </div>
        <Button variant="primary mb-2 w-75" size="lg">View More</Button>
        </Card>
      </Col>)}
        
      </Row>
      </Container>
    );
};

export default Services;
