import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { history } from '../pages/history';

const HeaderManutencao = () => {
    const usuario = JSON.parse(localStorage.getItem('app-token'));

    const logout = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <Image src={`${process.env.REACT_APP_BASE_URL}/images/logo_next_tennis_inline.jpg`} width="140" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">PRODUTOS:&nbsp;</Nav.Link>
                    <Nav.Link href="/manutencao/listar">Listar</Nav.Link>
                    <Nav.Link href="/manutencao/incluir">Incluir</Nav.Link>

                    {/* <Nav.Link href="/manutencao/alterar">Alterar</Nav.Link> */}
                    {/* <Nav.Link href="/manutencao/excluir">Deletar</Nav.Link> */}

                </Nav>

                <Nav className="mr-auto">
                    <Nav.Link href="#">USUÁRIOS:&nbsp;</Nav.Link>
                    <Nav.Link href="/manutencao/listarUsu">Listar</Nav.Link>
                    <Nav.Link href="/manutencao/incluirUsu">Incluir</Nav.Link>
                </Nav>

                <Nav>
                    <Image src={`${process.env.REACT_APP_BASE_URL}/images/usuarios/${usuario.username}.png`} roundedCircle height="45" width="45" />&nbsp;
                    <Button variant="light" onClick={logout}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default HeaderManutencao;