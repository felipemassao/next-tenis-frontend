import React, {useState} from 'react';
import {useGetProduto} from '../../hooks';
import {useFormik} from "formik";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {
    Error,
    Form,
    Input,
    Title,
    Wrap
} from "../../styles/components/Home.style";

const ConsultaProdutoId = () => {
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
            {!loading && Produto && (
                <Container>
                    <Title>Next-Tennis</Title>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${process.env.REACT_APP_BASE_URL}/images/produtos/${Produto["Fotos.nome_arquivo"]}.jpg`} />
                        <Card.Body>
                            <Card.Title>{Produto.descricao}</Card.Title>
                            <Card.Text>
                                <p>id: {Produto.id}</p>
                                <p>Marca: {Produto["Marca.descricao"]}</p>
                                <p>Modelo: {Produto.modelo}</p>
                                <p>Cor: {Produto["Core.descricao"]}</p>                            
                                <p>Tamanho: {Produto.tamanho}</p>
                                <p>Genero: {Produto.genero}</p>
                                <p>Estilo: {Produto["Estilo.descricao"]}</p>
                                <p>Preço: {Produto.preco}</p>
                            </Card.Text >
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body >
                    </Card >
                </Container >
            )}
        </Wrap>
    );
}

export default ConsultaProdutoId;