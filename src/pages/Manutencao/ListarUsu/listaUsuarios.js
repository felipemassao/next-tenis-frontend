// import React, { useState } from 'react';
import React from 'react';
import UserCard from './cardUsuarios';
import useListUsuario from '../../../hooks/useListUsuario';
import Table from "react-bootstrap/Table";
import Header from "../../../components/Header";

const ListaUsuario = () => {
  // const [index, setIndex] = useState(0);
  // const { loading, error, usuarios } = useListUsuario();

  const { loading, usuarios } = useListUsuario();

  console.log(usuarios)

/*   const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; */

  const createUserList = (usuarios) => usuarios.map(usuario => <UserCard Usuario={usuario} />);

  return (
    <>
      <Header />

      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link disabled" href="/manutencao/listarUsu"><b>MANUTENÇÃO DE USUÁRIOS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/manutencao/incluirUsu"><img src="/images/icone_incluir.jpg" alt="Incluir Usuário" height="35px"></img>Incluir</a>
        </li>
      </ul>

      <Table responsive striped bordered hover>
        <thead>
          <tr bgcolor="#add8e6">
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {!loading && usuarios && createUserList(usuarios)}
        </tbody>
      </Table>
    </>
  )

};

export default ListaUsuario;