import React from 'react';
import HeaderManutencao from '../../components/HeaderManutencao';
import { Wrap } from "../../styles/components/Home.style";

const HomeManutencaoOkDel = () => {
    return (
        <>
            <HeaderManutencao />
            <Wrap>
                <br />
                <h3>Exclusão Efetuada com Sucesso!</h3>
            </Wrap>
        </>   
    );
}

export default HomeManutencaoOkDel;