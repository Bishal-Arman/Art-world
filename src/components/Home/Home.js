import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import'./Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./arts.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div> <div className='mb-5 home'>
               
        <h1 className='text-center headline'>The Art World</h1>
 
        
         <h5 className='text-center '>This course is the best online art course.Where student learning art in online and submit the home task in online.We always try to teach our best </h5>
        <div>
        <h1 className='text-center headline'>Exibitions & Events</h1>
        </div>
          <div className='text-center exibit-point'>
              <h5>THE SOLO EXHIBITION</h5>
              <h5>THE COLLECTIVE EXHIBITION</h5>
              <h5>THE ONLINE EXHIBITION</h5>
              <h5>THE ANTHOLOGICAL EXHIBITION</h5>
          </div>
          <div className='exibition mt-5' > 
              <div >
              <img src="./home.jpg"alt="" />
              </div>
              <div className='discription'>
                  <h1>Welcome</h1>
                  <h4>Resurrecting time tested skills.</h4>
                  <h6>Where other courses concentrate on curating and the development of a professional exhibition proposal, this course covers the logistics of working directly.</h6>
              </div>
              </div>
        </div>
              
            <h1 className='text-center mt-5 text-primary'>Full Time Courses </h1>
            <h5 className='text-center'>Here all the courses is available.Student get here the best expriences.</h5>
          
            <Row xs={1} md={2} lg={2} className="g-4 mx-auto">
                {
                    courses.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </Row>
           
        </div>
    );
};

export default Home;