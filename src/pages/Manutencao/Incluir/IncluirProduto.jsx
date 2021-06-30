import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import prodSchema from '../../Schemas/prodSchema';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { Wrap } from "../../../styles/components/Home.style";
// import usePostUsuario from "../../../hooks/usePostUsuario";
import { history } from '../../history';

const IncluiProduto = () => {
    //      estado        método, utilizado para alterar o estado
    const [prodIncluded, setProdIncluded] = useState(false);

    function onSubmit(values, actions) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/produtos`, values)
        setProdIncluded(true)
        
        console.log('SUBMIT: ', values);
        // history.push('/manutencao')
    } 

return (
    <>
        <HeaderManutencao />
        <Wrap>
                <h3>Inclusão de Produto</h3>
                <Formik
                    onSubmit={onSubmit}
                    validationSchema={prodSchema}
                    validateOnMount
                    initialValues={{ descricao: '', marca_id: '', modelo: '', cor_id: '', tamanho: '', genero: '', estilo_id: '', preco: ''      
                }}    
                    render={({values, errors}) => (
                        <Form> 
                            <div>
                                <Field name="descricao" type="text" placeholder="Descricao" />
                                <ErrorMessage name="descricao" />
                            </div>
                            <div>
                                <Field name="marca_id" type="text" placeholder="ID da Marca" />
                                <ErrorMessage name="marca_id" />
                            </div>
                            <div>
                                <Field name="modelo" type="text" placeholder="Modelo" />
                                <ErrorMessage name="modelo" />
                            </div>
                            <div>
                                <Field name="cor_id" type="text" placeholder="ID da Cor" />
                                <ErrorMessage name="cor_id" />
                            </div>
                            <div>
                                <Field name="tamanho" type="text" placeholder="Tamanho" />
                                <ErrorMessage name="tamanho" />
                            </div>
                            <div>
                                <Field name="genero" type="text" placeholder="Gênero" />
                                <ErrorMessage name="Genero" />
                            </div>
                            <div>
                                <Field name="estilo_id" type="text" placeholder="ID do Estilo" />
                                <ErrorMessage name="estilo_id" />
                            </div>                                                                                    
                            <div>
                                <Field name="preco" type="text" placeholder="Preço" />
                                <ErrorMessage name="preco" />
                            </div>   

                            <br />
                            <button type="submit">
                                Incluir Produto
                            </button>
                            {prodIncluded && <h1>Produto Incluído com Sucesso !</h1>}
                        </Form>
                    )}
                />
            </Wrap>
        </>
    );
}

export default IncluiProduto;