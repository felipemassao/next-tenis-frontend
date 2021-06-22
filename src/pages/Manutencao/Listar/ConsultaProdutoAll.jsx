import { useGetListarProdutos } from '../../../hooks';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { GridComponent } from '@syncfusion/ej2-react-grids';
import Container from 'react-bootstrap/Container';
import { Error } from "../../../styles/components/Home.style";
// import data from './produtos.json';
import './ListarProduto.css';

const ListarProduto = () => {

    const { loading, error, Produto } = useGetListarProdutos();

    console.log(Produto);

    return (
        <>

            {/*          {error && <Error>* Erro na leitura dos dados</Error>}
         {!loading && Produto && (
 */}

            <Container>
                <HeaderManutencao />
                <div style={{ margin: '10%', marginTop: '5%' }}>
                    <GridComponent dataSource={Produto} />
                </div>
            </Container>

            {/* )} */}

        </>
    );
}

export default ListarProduto;