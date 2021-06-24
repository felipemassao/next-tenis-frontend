import {useEffect, useState} from 'react';
//import _ from 'lodash';
import {listUsuario} from "../api/usuario";

const useListUsuario = () => {
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        listUsuario()
          .then((result) => {
            // console.log(result);
            setError(null);
            setUsuarios(result);
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            setUsuarios(null);
            setError(error.message);
          });
      }, []);

    return {loading, error, usuarios};
};

export default useListUsuario;