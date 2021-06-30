import {useEffect, useState} from 'react';
//import _ from 'lodash';
import {getUsuario} from "../api";

const useGetUsuario = (Id) => {
    console.log(Id)
    const [loading, setLoading] = useState(true);
    const [Usuario, setUsuario] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (Id) {
            getUsuario(Id).then((result) => {
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

export default useGetUsuario;