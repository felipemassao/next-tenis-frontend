import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const HeaderManutencao = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">
                <Image src={`${process.env.REACT_APP_BASE_URL}/images/logo_next_tennis_inline.jpg`} width="140" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/manutencao/listar">Listar Produtos Teste</Nav.Link>
                    <Nav.Link href="/manutencao/incluir">Inclui Produto</Nav.Link>
                    <Nav.Link href="/manutencao/alterar">Altera Produto</Nav.Link>
                    <Nav.Link href="/manutencao/excluir">Deleta Produto</Nav.Link>
                </Nav>

                <Nav className="mr-auto">
                    <Nav.Link href="/manutencao/incluirUsu">Inclui Usuário</Nav.Link>
                    <Nav.Link href="/manutencao/excluirUsu">Deleta Usuário</Nav.Link>
                </Nav>

                <Nav>
                    <Button variant="light"><Link to="/">Logout</Link></Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default HeaderManutencao;