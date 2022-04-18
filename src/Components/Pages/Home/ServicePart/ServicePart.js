import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const ServicePart = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleCheckOut = (id) => {
    navigate(`/services`)
  }
  return (
    <div>
      <h2 className="mt-5 mb-4 text-center text-primary">My Services</h2>
      <Container className="d-flex justify-content-center align-items-center">
          <Row xs={1} md={3} className="g-4">
            {
              services.slice(0, 3).map((service) =><SingleService 
                key={service.id} 
                service={service}
                handleCheckOut={handleCheckOut}
            ></SingleService>)}
          </Row>
      </Container>
    </div>
  );
};

export default ServicePart;
