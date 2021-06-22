import {useEffect, useState} from 'react';
import {getListarProdutos} from "../api";

const useGetListarProdutos = () => {
    const [loading, setLoading] = useState(true);
    const [Produto, setProduto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
            getListarProdutos().then((result) => {
                // console.log(result)
                setError(null);
                setProduto(result);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                setProduto(null);
                setError(error.message);
            });
        },[]);

    return {loading, error, Produto};
};

export default useGetListarProdutos;