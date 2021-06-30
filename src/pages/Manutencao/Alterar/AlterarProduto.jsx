import { useParams } from "react-router-dom";
import ProdutoDetalhes from "./components/ProdutoDetalhes";
import HeaderManutencao from "../../../components/HeaderManutencao";
import { useGetProduto } from "../../../hooks";

const ManutAlteraProduto = () => {
        const { id } = useParams();
        const {loading, error, Produto} = useGetProduto(id);
        console.log(id)
        console.log(Produto)
      
        return (
          <>
            <HeaderManutencao />
            {Produto && <ProdutoDetalhes Produto={Produto}/>}
          </>
        );
      };
      
export default ManutAlteraProduto;