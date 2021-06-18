import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <Image src={`${process.env.REACT_APP_BASE_URL}/images/logo_next_tennis_inline.jpg`} width="140"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/produto">Consulta Produto</Nav.Link>
                    </Nav>                   
                    <Nav>
                        <Button variant="light"><Link to="/signin">Restrito</Link></Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;