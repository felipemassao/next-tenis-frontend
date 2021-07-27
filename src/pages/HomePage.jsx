import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "../components/Header";
import useListProduto from "../hooks/useListProduto";
import CardProduto from "../components/CardProduto";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const HomePage = () => {
  const query = useQuery();
  console.log(query.get('genero'));
  const genero = query.get('genero');

  const [index, setIndex] = useState(0);
  const { loading, produtos } = useListProduto();

  function retornaGenero(value){
    if (genero === "masculino")
      {
        console.log("Entrei no if 1 ...")
        if (value.genero === "Masculino")
        return value;
      }
    else if (genero === "feminino")
      {
      console.log("Entrei no if 2 ...")
      if (value.genero === "Feminino")
      return value;
      }
        else
        {
          console.log("Entrei no if diferente 1 e 2 ...")
          // if (value.genero === "Feminino" || value.genero ==="Masculino")
          value = "masculino";
          return value;
        };
  }

  const produtosGenero = produtos.filter(retornaGenero);
  console.log(produtosGenero);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const createProdutoGrid = (produtosGenero) => {
    const produtoGrid = [];
    for(let i = 0; i < produtosGenero.length; i += 3){
      produtoGrid.push(
        <CardGroup>
          <CardProduto Produto={produtosGenero[i]}/>
          { i + 1 < produtosGenero.length && <CardProduto Produto={produtosGenero[i+1]}/> }
          { i + 2 < produtosGenero.length && <CardProduto Produto={produtosGenero[i+2]}/> }
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

            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src={`${process.env.REACT_APP_BASE_URL}/images/produtos/1.jpg`}
                  src="/images/banners/banner01.jpg"
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                
                <img
                  className="d-block w-100"
                  // src={`${process.env.REACT_APP_BASE_URL}/images/produtos/2.jpg`}
                  src="/images/banners/banner02.jpg"
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  // src={`${process.env.REACT_APP_BASE_URL}/images/produtos/3.jpg`}
                  src="/images/banners/banner03.jpg"
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>

          <Col />
        </Row>

        {!loading && produtosGenero && createProdutoGrid(produtosGenero)}

      </Container>
    </>
  );
};

export default HomePage;
