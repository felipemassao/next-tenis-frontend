import React, { useState } from 'react';
import UserCard from './cardUsuarios';
import HeaderManutencao from '../../../components/HeaderManutencao';
import useListUsuario from '../../../hooks/useListUsuario';

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

    const createUserList = (usuarios) => {
        const usuarioLista = [];
        for(let i = 0; i < usuarios.length; i ++){
            usuarioLista.push( <UserCard Usuario={usuarios[i]}/> 
        )
      }
    return usuarioLista;
    }

    // console.log(createUserList(usuarios))

  return (
    <>
        <HeaderManutencao />
            <div
            style={{
                maxWidth: 800,
                margin: '30px auto',
            }}
            >
            {!loading && usuarios && createUserList(usuarios)}
            </div>
    </>
  )

};

export default ListaUsuario;