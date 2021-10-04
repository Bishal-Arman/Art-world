import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Courses.css'

const Courses = (props) => {
  const { name, days, Time, price, img } = props.course;
  return (
    <Col>
      <Card className='courses'>
        <Card.Img variant="top" src={img} />
        <Card.Body className='text-center'>
          <h3>{name}</h3>
          <h6><span>Days of week:</span> {days}</h6>
          <h6><span>Time:</span> {Time}</h6>
          <h5>Course fee: <span className='price'>${price}</span> /Monthly</h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Courses;