import { useParams } from "react-router-dom";
import DetalheProdutoDel from "./components/ProdutoDetalhesDel";
import { useGetProduto } from "../../../hooks";
import Header from "../../../components/Header";

const ManutExcluirProduto = () => {
        const { id } = useParams();
        const { Produto } = useGetProduto(id);
        
        console.log(Produto)

        return (
          <>
            <Header />
            {Produto && <DetalheProdutoDel Produto={Produto}/>}
          </>
        );
      };
      
export default ManutExcluirProduto;