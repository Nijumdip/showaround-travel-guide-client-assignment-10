import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Services from "../../Services/Services";
import SingleService from "../SingleService/SingleService";

const ServicePart = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="mt-5 mb-4 text-center text-primary">Our Services</h2>
      <Container className="d-flex justify-content-center align-items-center">
          <Row xs={1} md={3} className="g-4">
            {
              services.slice(0, 3).map((service) =><SingleService 
                key={service.id} 
                service={service}
            ></SingleService>)}
          </Row>
      </Container>
    </div>
  );
};

export default ServicePart;
