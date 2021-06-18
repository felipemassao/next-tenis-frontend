import React, {useCallback, useState} from 'react';
import {useGetProduto} from '../../../hooks';
import {useFormik} from "formik";
import {Container} from '../../../styles/components/Shared';
import axios from 'axios';
import { history } from '../../history';

import {
    Button,
    Card,
    CardBody,
    Error,
    Form,
    Input,
    Wrap
} from "../../../styles/components/Home.style";

const ExcluirProdutoId = () => {
    const [searchInput, setSearchInput] = useState(null)
    const formik = useFormik({
        initialValues: {
            Produto: '',
        },
        onSubmit: (values) => {
            setSearchInput(values.Produto.toLowerCase());
        }
    });

    const {loading, error, Produto} = useGetProduto(searchInput);

    const onDeleteProductClick = useCallback(()=> {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/produtos/${Produto.id}`).then(() => setSearchInput(null) ) 
        history.push('/manutencao')

    },[Produto])

    return (
        <Container>
            <Wrap>
                <h3>Informe o Produto que deseja Excluir</h3>
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="Produto" hidden>Entre com o ID do produto</label>
                    <Input type="text"
                           name="Produto"
                           placeholder="Código (ID) do Produto"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.Produto}
                    />
                    <Button type="submit">Exibir Produto</Button>
                    {error && <Error>* Código inválido ou inexistente</Error>}
                </Form>
            </Wrap>
            {!loading && Produto && (
                <Wrap>
                    <h4>Next-Tennis</h4>
                    <Card>
                        <CardBody>
                            <h2>{Produto.descricao}</h2>
                            <p>id: {Produto.id}</p>
                            <p>Marca id: {Produto.marca_id}</p>
                            <p>Modelo: {Produto.modelo}</p>
                            <p>Cor id: {Produto.cor_id}</p>                            
                            <p>Tamanho: {Produto.tamanho}</p>
                            <p>Genero: {Produto.genero}</p>
                            <p>Estilo id: {Produto.estilo_id}</p>
                            <p>Preço: {Produto.preco}</p>
                        </CardBody>
                    </Card>
                </Wrap>
            )}

            <button onClick={onDeleteProductClick}>
                Efetuar exclusão
            </button> 

        </Container>
    );
}

export default ExcluirProdutoId;