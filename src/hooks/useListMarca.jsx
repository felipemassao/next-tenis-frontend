import { useEffect, useState } from "react";
import { listMarca } from "../api";

const useListMarca = () => {
  const [loading, setLoading] = useState(true);
  const [marcas, setMarcas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    listMarca()
      .then((result) => {
        // console.log(result);
        setError(null);
        setMarcas(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setMarcas(null);
        setError(error.message);
      });
  }, []);

  return { loading, error, marcas };
};

export default useListMarca;
