import React from 'react';
import HeaderManutencao from '../../components/HeaderManutencao';
import { Wrap } from "../../styles/components/Home.style";
import Header from "../../components/Header";

const HomeManutencaoOkDel = () => {
    return (
        <>
            <Header />
            <Wrap>
                <br />
                <h3>Exclusão Efetuada com Sucesso!</h3>
            </Wrap>
        </>   
    );
}

export default HomeManutencaoOkDel;