import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
   
  const handleCheckout = (id) => {
    navigate(`/checkout`)
  }
  return (
    <Container className="d-flex my-5 justify-content-center align-items-center">
    <Row xs={1} md={3} className="g-4">
      {
        services.map((service) =><Col key={service.id} >
        <Card style={{height:'650px'}}>
          <div className="d-flex justify-content-center align-items-center ">
            <img
              className="m-3 rounded-3"
              variant="top"
              src={service.img}
              width="320px"
              height="350px"
              alt="img not found"
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center ">
          <h3>{service.name}</h3>
          <p className="mx-3">{service.description.slice(0,150)}</p>
          <p>Price : $ {service.price}</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
        <Button onClick={()=>handleCheckout(service.id)} variant="primary mb-2 w-75" size="lg">Check out</Button>
        </div>
        </Card>
      </Col>)}
        
      </Row>
      </Container>
    );
};

export default Services;
