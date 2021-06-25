import React, { useState } from 'react';
import UserCard from './cardUsuarios';
import HeaderManutencao from '../../../components/HeaderManutencao';
import useListUsuario from '../../../hooks/useListUsuario';
import Table from "react-bootstrap/Table";

const ListaUsuario = () => {
  /*      const usuario = {
        "username": "geraldo",
        "email": "geraldo@email.com"
      } */
  const [index, setIndex] = useState(0);
  const { loading, error, usuarios } = useListUsuario();

  console.log(usuarios)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const createUserList = (usuarios) => usuarios.map(usuario => <UserCard Usuario={usuario} />);

  // console.log(createUserList(usuarios))

  return (
    <>
      <HeaderManutencao />
      {/* <div
            style={{
                maxWidth: 800,
                margin: '30px auto',
            }}
            > */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {!loading && usuarios && createUserList(usuarios)}
        </tbody>
      </Table>
      {/* </div> */}
    </>
  )

};

export default ListaUsuario;