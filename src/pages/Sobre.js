import React from 'react';
import Header from "../components/Header";

const Sobre = () => {
  return (
    <>
      <Header />

      <div class="container">

        <div class="container-fluid mt-1">
          <h5 class="card-title">Sobre nós</h5>
        </div>

        <div class="row">
        <div class="container-fluid">
          <div class="card">
          <img src="/images/banners/banner_sobre.jpg" alt="Sobre nós" width="100%"></img>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Next Tênnis</h5>
                <p class="card-text">
                  Somos o maior e-commerce especializado em tênis do Brasil. Fundada em 2021 por estudantes do curso de
                  Desenvolvimento Web Full Stack da conceituada escola Digital House, é uma loja on-line especializado em tênis que
                  atendem todas as suas necessidades, desde uma simples caminhada em seus momentos de lazer ou caminhada, até
                  modelos sofisticados e tecnológicos que atendem ao mais exigente atleta profissional, praticante de qualquer
                  esporte.
                </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card h-100">
                <img
                  className="d-block w-100"
                  src="/images/centro_distribuicao.jpg"
                  alt="Sobre nós"
                />
          </div>
        </div>
      </div>

      </div>

    </>
  )

};

export default Sobre;