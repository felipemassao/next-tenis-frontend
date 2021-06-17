import {useEffect, useState} from 'react';
//import _ from 'lodash';
import {getProduto} from "../api";

const useGetProduto = (Id) => {
    const [loading, setLoading] = useState(true);
    const [Produto, setProduto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (Id) {
            getProduto(Id).then((result) => {
                console.log(result)
                setError(null);
                setProduto(result);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                setProduto(null);
                setError(error.message);
            });
        }
    }, [Id]);

    return {loading, error, Produto};
};

export default useGetProduto;