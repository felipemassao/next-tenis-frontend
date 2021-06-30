import React from 'react';
import HeaderManutencao from '../../components/HeaderManutencao';
import { Wrap } from "../../styles/components/Home.style";

const HomeManutencaoOkAlter = () => {
    return (
        <>
            <HeaderManutencao />
            <Wrap>
                <br />
                <h3>Alteração Efetuada com Sucesso!</h3>
            </Wrap>
        </>   
    );
}

export default HomeManutencaoOkAlter;