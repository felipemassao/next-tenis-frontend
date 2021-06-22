import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// import Container from 'react-bootstrap/Container';

const CardProduto = ({ Produto }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Carousel fade indicators={false} controls={false}>
          {Produto.fotos.map((foto) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={
                  Produto.fotos[0] &&
                  `${process.env.REACT_APP_BASE_URL}/images/produtos/${foto.nome_arquivo}.jpg`
                }
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Title>{Produto.descricao}</Card.Title>
        <Card.Text>
          <p>Marca: {Produto["Marca.descricao"]}</p>
          <p>Modelo: {Produto.modelo}</p>
          <p>Cor: {Produto["Core.descricao"]}</p>
          <p>Tamanho: {Produto.tamanho}</p>
          <p>Genero: {Produto.genero}</p>
          <p>Estilo: {Produto["Estilo.descricao"]}</p>
          <p>Preço: {Produto.preco}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProduto;
