import React from 'react';
import ProdCard from './cardProdutos';
import useListProduto from '../../../hooks/useListProduto';
import Table from "react-bootstrap/Table";
import Header from "../../../components/Header";

const ListaProduto = () => {
  // const [index, setIndex] = useState(0);
  const { loading, produtos } = useListProduto();

  console.log(produtos)

/*   const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; */

  const createProdList = (produtos) => produtos.map(produto => <ProdCard Produto={produto} />);

  return (
    <>
      <Header />
      
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link disabled" href="/manutencao/listar"><b>MANUTENÇÃO DE PRODUTOS</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/manutencao/incluir"><img src="/images/icone_incluir.jpg" alt="Incluir Produto" height="35px"></img>Incluir</a>
        </li>
      </ul>

      <Table responsive striped bordered hover>
        <thead>
          <tr bgcolor="#add8e6">
            <th>id</th>
            <th>descricao</th>
            <th>marca_id</th>
            <th>modelo</th>
            <th>cor_id</th>
            <th>tamanho</th>
            <th>genero</th>
            <th>estilo_id</th>
            <th>preco</th>
            <th>ações</th>
          </tr>
        </thead>
        <tbody>
          {!loading && produtos && createProdList(produtos)}
        </tbody>
      </Table>
    </>
  )

};

export default ListaProduto;