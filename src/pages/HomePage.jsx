import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "../components/Header";
import useListProduto from "../hooks/useListProduto";
import CardProduto from "../components/CardProduto";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const { loading, error, produtos } = useListProduto();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const createProdutoGrid = (produtos) => {
    const produtoGrid = [];
    for(let i = 0; i < produtos.length; i += 3){
      produtoGrid.push(
        <CardGroup>
          <CardProduto Produto={produtos[i]}/>
          { i + 1 < produtos.length && <CardProduto Produto={produtos[i+1]}/> }
          { i + 2 < produtos.length && <CardProduto Produto={produtos[i+2]}/> }
        </CardGroup>
      )
    }
    return produtoGrid;
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col />
          <Col xs={6}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_BASE_URL}/images/produtos/1.jpg`}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_BASE_URL}/images/produtos/2.jpg`}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_BASE_URL}/images/produtos/3.jpg`}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col />
        </Row>
        <Row>
          {!loading && produtos && createProdutoGrid(produtos)}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
