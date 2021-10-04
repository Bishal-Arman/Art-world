import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mx-auto '>
            <h1 className='text-center footer-heading '>Artsletter</h1>
            <p className='text-center text-succes'>Subscribe to our mailing list</p>
            <InputGroup className="mb-3 input-field">
                <FormControl
                    placeholder="Enter Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2" className='bg-primary button'>
                    SIGN UP
                </Button>
            </InputGroup>
            <div className='row footer-menu'>
                <div className='col-lg-3 col-md-6 col-sm-6 text-center '>

                    <h3>Courses</h3>
                    <p>Painting</p>
                    <p>Sketch</p>
                    <p>Sculpture</p>
                    <p>Drawing</p>
                    <p>Digital</p>

                </div>
                <div className='col-lg-4 text-center'>
                    <h3>Contact</h3>
                    <p>1 888 123 4578</p>
                    <p>info@artworld.com</p>
                    <p>877 potter Ave,Ridgeood</p>
                </div>
                <div className='col-lg-4 text-center'>
                    <h3>Socials</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Dribbble</p>
                    <p>Twitter</p>
                </div>
            </div>
            <p className='copyright'>Copyright © 2021 . All Rights Reserved</p>
        </div>
    );
};

export default Footer;