import { useListProduto } from '../../../hooks';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import Container from 'react-bootstrap/Container';
import { Error } from "../../../styles/components/Home.style";
// import data from './produtos.json';
import './ListarProduto.css';

const ListarProduto = () => {

    const { loading, error, produtos } = useListProduto();
    console.log(produtos);

    const createProdutoArray = (produtos) => {
        const produtoArray = [];
        for (let i = 0; i < produtos.length; i++) {
            produtoArray.push(produtos[i])
        }
        return produtoArray;
    }

    return (
        <>
            {error && <Error>* Erro na leitura dos dados</Error>}
            {!loading && produtos && (
                <Container>
                    <HeaderManutencao />
                    <div style={{ margin: '10%', marginTop: '5%' }}>
                        <GridComponent dataSource={createProdutoArray} />
                    </div>
                </Container>
            )}
        </>
    );
}

export default ListarProduto;