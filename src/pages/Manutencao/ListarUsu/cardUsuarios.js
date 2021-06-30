import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const UserCard = ({ Usuario }) => {
  return (
    <tr>
      <td>{Usuario.id}</td>
      <td>{Usuario.username}</td>
      <td>{Usuario.email}</td>
      <td>
        <Link to={`/manutencao/alterarUsu/${Usuario.id}`}>
          <FontAwesomeIcon icon={faPen} />
        </Link> /
        <Link to={`/manutencao/excluirUsu/${Usuario.id}`}>
          <FontAwesomeIcon icon={faTrash} />
        </Link>
      </td>
    </tr>
  );
};

export default UserCard;