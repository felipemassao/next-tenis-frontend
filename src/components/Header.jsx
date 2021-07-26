import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { history } from '../pages/history';

const Header = () => {
    
    const usuario = JSON.parse(localStorage.getItem('app-token'));

    const logout = () => {
        localStorage.clear();
        history.push('/0');
    };

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/0">
                <Image src={`${process.env.REACT_APP_BASE_URL}/images/logo_next_tennis_inline.jpg`} width="140"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">          
                    <Nav className="mr-auto">
                        <Nav.Link href="/0">Home</Nav.Link>
                        <Nav.Link href="/1">Masculino</Nav.Link>
                        <Nav.Link href="/2">Feminino</Nav.Link>
                        <Nav.Link href="/sobre/sobre">Quem Somos</Nav.Link>
                    </Nav>
                    {
                        usuario ?
                        <>
                            <Nav className="mr-auto">
                            <Nav.Link href="#">MANUTENÇÃO:&nbsp;&nbsp;</Nav.Link>
                            <Nav.Link href="/manutencao/listar">Produtos</Nav.Link>
                            <Nav.Link href="/manutencao/listarUsu">Usuários</Nav.Link>
                            </Nav>

                            <Nav>
                                <Image src={`${process.env.REACT_APP_BASE_URL}/images/usuarios/${usuario.username}.png`} roundedCircle height="45" width="45" />&nbsp;
                                <Button variant="light" onClick={logout}>Logout</Button>
                            </Nav>
                        </>
                        :
                        <Nav>
                            <Button variant="light"><Link to="/signin/signin">Restrito</Link></Button>
                        </Nav>
                    }                    
                </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;