import { useEffect, useState } from "react";
import { listEstilo } from "../api";

const useListEstilo = () => {
  const [loading, setLoading] = useState(true);
  const [estilos, setEstilos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    listEstilo()
      .then((result) => {
        // console.log(result);
        setError(null);
        setEstilos(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setEstilos(null);
        setError(error.message);
      });
  }, []);

  return { loading, error, estilos };
};

export default useListEstilo;
