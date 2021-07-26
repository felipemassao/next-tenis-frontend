import { useEffect, useState } from "react";
import { listProduto } from "../api";

const useListProduto = () => {
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    listProduto()
      .then((result) => {
        // console.log(result);
        setError(null);
        setProdutos(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setProdutos(null);
        setError(error.message);
      });
  }, []);

  // const produtosGenero = produtos.filter(retornaGenero);
  // console.log(produtosGenero);

  return { loading, error, produtos };
};

export default useListProduto;
