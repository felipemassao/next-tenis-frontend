import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { history } from '../pages/history';

const CardProduto = ({ Produto }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Carousel fade indicators={false} controls={false} interval={2000}>
          {Produto.fotos.map((foto) => (
            <Carousel.Item>
              <img
                onClick={() => history.push(`/produto/${Produto.id}`)}
                className="d-block w-100"
                src={
                  `${process.env.REACT_APP_BASE_URL}/images/produtos/${foto.nome_arquivo}.jpg`
                }
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Title>{Produto.descricao}</Card.Title>
        <Card.Text>
          <p>Preço: {Produto.preco}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProduto;
