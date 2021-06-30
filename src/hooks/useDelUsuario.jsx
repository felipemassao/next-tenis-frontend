import {useEffect, useState} from 'react';
//import _ from 'lodash';
import {delUsuario} from "../api";

const useDelUsuario = (Id) => {
    console.log(Id)
    const [loading, setLoading] = useState(true);
    const [Usuario, setUsuario] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (Id) {
            delUsuario(Id).then((result) => {
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
    }, [Id]);

    return {loading, error, Usuario};
};

export default useDelUsuario;