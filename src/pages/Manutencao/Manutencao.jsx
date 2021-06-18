import React from 'react';
import {ContainerMenu} from '../../styles/components/Shared';
import { NavMenu, LiMenu, UlMenu } from '../../styles/components/Home.style';
import { Link } from "react-router-dom";

const HomeManutencao = () => {

    return (
        <ContainerMenu>
            <NavMenu>
                <UlMenu>
                    <LiMenu><Link to="/Produto">Consulta Produto</Link></LiMenu>                                      
                    <LiMenu><Link to="/manut/excluir">Excluir Produto</Link></LiMenu>
                    </UlMenu>
            </NavMenu>
        </ContainerMenu>       
    );
}

export default HomeManutencao;