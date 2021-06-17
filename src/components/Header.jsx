import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Next Tenis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="light">Restrito</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;