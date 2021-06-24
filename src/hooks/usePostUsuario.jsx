import {useEffect, useState} from 'react';
//import _ from 'lodash';
import {postUsuario} from "../api";

const usePostUsuario = (values) => {
    const [loading, setLoading] = useState(true);
    const [Usuario, setUsuario] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (values) {
            postUsuario(values).then((result) => {
                console.log(result)
                setError(null);
                setUsuario(result);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                setUsuario(null);
                setError(error.message);
            });
        }
    }, [values]);

    return {loading, error, Usuario};
};

export default usePostUsuario;