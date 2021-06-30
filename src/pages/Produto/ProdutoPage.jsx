import { useParams } from "react-router-dom";
import ProdutoDetalhes from "./components/ProdutoDetalhes";
import Header from "../../components/Header";
import { useGetProduto } from "../../hooks";

const ProdutoPage = () => {
  const { id } = useParams();
  const { Produto } = useGetProduto(id);
  console.log(id)

  return (
    <>
      <Header />
      {Produto && <ProdutoDetalhes Produto={Produto}/>}
    </>
  );
};

export { ProdutoPage };
