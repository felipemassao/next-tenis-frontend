import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardProduto = ({ Produto }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            fade
            indicators={false}
            controls={false}
            interval={null}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {Produto.fotos.map((foto) => (
              <Carousel.Item>
                <img
                  width={384}
                  height={384}
                  class="border border-dark"
                  src={
                    Produto.fotos[0] &&
                    `${process.env.REACT_APP_BASE_URL}/images/produtos/${foto.nome_arquivo}.jpg`
                  }
                  rounded
                  alt="product"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col>
          <p>Marca: {Produto["Marca.descricao"]}</p>
          <p>Modelo: {Produto.modelo}</p>
          <p>Cor: {Produto["Core.descricao"]}</p>
          <p>Tamanho: {Produto.tamanho}</p>
          <p>Genero: {Produto.genero}</p>
          <p>Estilo: {Produto["Estilo.descricao"]}</p>
          <p>Preço: {Produto.preco}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {Produto.fotos.map((foto, idx) => (
            <img
              onClick={() => setIndex(idx)}
              width={128}
              height={128}
              class="border border-dark"
              src={`${process.env.REACT_APP_BASE_URL}/images/produtos/${foto.nome_arquivo}.jpg`}
              rounded
              alt="product"
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CardProduto;
