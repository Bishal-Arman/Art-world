import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
  const { name, days, Time, price, img } = props.service;
  return (
    <Col>
      <Card className='courses course-details'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='text-center'>
          <h3>{name}</h3>
          <h6>Days of week: {days}</h6>
          <h6>Time: {Time}</h6>
          <h6>Course fee: ${price}/Monthly</h6>
          <button className='btn-regular'>Enroll Now</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;