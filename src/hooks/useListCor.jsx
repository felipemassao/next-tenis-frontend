import { useEffect, useState } from "react";
import { listCor } from "../api";

const useListCor = () => {
  const [loading, setLoading] = useState(true);
  const [cores, setCores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    listCor()
      .then((result) => {
        // console.log(result);
        setError(null);
        setCores(result);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setCores(null);
        setError(error.message);
      });
  }, []);

  return { loading, error, cores };
};

export default useListCor;
