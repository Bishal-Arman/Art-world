import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Row } from 'react-bootstrap';
import Service from '../Service/Service';
import'./Services.css'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        
       <div>
         <div>
         <h1 className='text-center text-primary mt-5'>Our Courses</h1>
         </div>
          <Row xs={1} md={2} lg={3} className="g-4">
         
         {
             services.map(service=><Service
               key={service.id}
               service={service}
             ></Service>)
         }
       </Row>
       </div>
    );
};

export default Services;