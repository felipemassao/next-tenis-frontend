import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ProdCard = ({ Produto }) => {
  return (
    <tr>
      <td>{Produto.id}</td>
      <td>{Produto.descricao}</td>
      <td>{Produto["Marca.descricao"]}</td>
      <td>{Produto.modelo}</td>
      <td>{Produto["Core.descricao"]}</td>
      <td>{Produto.tamanho}</td>
      <td>{Produto.genero}</td>
      <td>{Produto.["Estilo.descricao"]}</td>
      <td>{Produto.preco}</td>
      <td>
        <Link to={`/manutencao/alterar/${Produto.id}`}>
          <FontAwesomeIcon icon={faPen} />
        </Link> /
        <Link to={`/manutencao/excluir/${Produto.id}`}>
          <FontAwesomeIcon icon={faTrash} />
        </Link>
      </td>
    </tr>
  );
};

export default ProdCard;