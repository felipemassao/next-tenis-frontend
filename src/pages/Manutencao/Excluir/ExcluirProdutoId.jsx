import { useParams } from "react-router-dom";
import DetalheProdutoDel from "./components/ProdutoDetalhesDel";
import HeaderManutencao from "../../../components/HeaderManutencao";
import { useGetProduto } from "../../../hooks";

const ManutExcluirProduto = () => {
        const { id } = useParams();
        const {loading, error, Produto} = useGetProduto(id);
        
        console.log(Produto)

        return (
          <>
            <HeaderManutencao />
            {Produto && <DetalheProdutoDel Produto={Produto}/>}
          </>
        );
      };
      
export default ManutExcluirProduto;