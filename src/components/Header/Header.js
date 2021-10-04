import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand='lg' className='mx-auto' >
            <Container>
                <Navbar.Brand className='nav-left' as={Link} to={"/home"}>ART WORLD</Navbar.Brand>
                <Navbar.Toggle />

                <Nav className="ml-auto nav-right">
                    <Navbar.Collapse>
                        <Nav.Link className='menu' as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link className='menu' as={Link} to={"/about"}>Abouts</Nav.Link>
                        <Nav.Link className='menu' as={Link} to={"/services"}>Services</Nav.Link>
                        <Nav.Link className='menu' as={Link} to={"/features"}>Features</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;