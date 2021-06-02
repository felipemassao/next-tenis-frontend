import React, {useState} from 'react';
import {useGetProduto} from "../hooks";
import {useFormik} from "formik";
import {Container} from "../styles/components/Shared";

import {
    Button,
    Card,
    CardBody,
    Error,
    Form,
    Input,
    Title,
    Wrap
} from "../styles/components/Home.style";

const HomePage = () => {
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

    return (
        <Container>
            <Wrap>
                <Title>Consulta Produto por ID</Title>
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="Produto" hidden>Entre com o ID do produto</label>
                    <Input type="text"
                           name="Produto"
                           placeholder="Código (ID) do Produto"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.Produto}
                    />
                    <Button type="submit">Consultar</Button>
                    {error && <Error>* Código inválido ou inexistente</Error>}
                </Form>
            </Wrap>
            {!loading && Produto && (
                <Wrap>
                    <Title>Next-Tennis</Title>
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
        </Container>
    );
}

export default HomePage;