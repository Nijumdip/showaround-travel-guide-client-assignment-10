import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './SingleService.css'

const SingleService = ({ service, handleCheckOut }) => {
  const { id, img, name, description, price } = service;
  return (
    <Col>
      <Card>
        <div>
          <img
            className="m-3 rounded-3"
            variant="top"
            src={img}
            width="320px"
            height="350px"
            alt="img not found"
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <h3>{name}</h3>
          <p className="mx-3">{description}</p>
          <p>Price : $ {price}</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
        <Button onClick={()=>handleCheckOut(id)} variant="primary mb-2 w-75" size="lg">View More</Button>
        </div>
      </Card>
    </Col>
  );
};

export default SingleService;
