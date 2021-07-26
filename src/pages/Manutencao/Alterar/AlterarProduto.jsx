import { useParams } from "react-router-dom";
import ProdutoDetalhes from "./components/ProdutoDetalhes";
import { useGetProduto } from "../../../hooks";
import Header from "../../../components/Header";

const ManutAlteraProduto = () => {
        const { id } = useParams();
        const { Produto } = useGetProduto(id);
        console.log(id)
        console.log(Produto)
      
        return (
          <>
            <Header />
            {Produto && <ProdutoDetalhes Produto={Produto}/>}
          </>
        );
      };
      
export default ManutAlteraProduto;