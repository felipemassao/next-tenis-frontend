import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Field, Form, DropDown, ErrorMessage } from 'formik';
import prodSchema from '../../Schemas/prodSchema';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { Wrap } from "../../../styles/components/Home.style";
// import usePostUsuario from "../../../hooks/usePostUsuario";
import { history } from '../../history';
import Header from "../../../components/Header";

const IncluiProduto = () => {
    //      estado        método, utilizado para alterar o estado
    const [prodIncluded, setProdIncluded] = useState(false);
    const [error, setError] = useState(null);

    function onSubmit(values, actions) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/produtos`, values)
            .then(() => {
                setProdIncluded(true);
                setError(null);
            })
            .catch((err) => {
                setProdIncluded(null);
                setError(err.response.data.error);
                console.log(err.response)
            });
    } 

return (
    <>
        <Header />
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
                            <table>
                                <tr>
                                    <td><label>Descrição:&nbsp;</label></td>
                                    <td>
                                        <div>                            
                                            <Field name="descricao" type="text" placeholder="Descrição" />
                                            <ErrorMessage name="descricao" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>ID da Marca:&nbsp;</label></td>
                                    <td>
                                        <div>                   
                                            <Field name="marca_id" type="text" placeholder="ID da Marca" />
                                            <ErrorMessage name="marca_id" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Modelo:&nbsp;</label></td>
                                    <td>
                                        <div>                  
                                            <Field name="modelo" type="text" placeholder="Modelo" />
                                            <ErrorMessage name="modelo" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>ID da Cor:&nbsp;</label></td>
                                    <td>
                                        <div>                    
                                            <Field name="cor_id" type="text" placeholder="ID da Cor" />
                                            <ErrorMessage name="cor_id" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Tamanho:&nbsp;</label></td>
                                    <td>
                                        <div>                                                
                                            <Field name="tamanho" type="text" placeholder="Tamanho" />
                                            <ErrorMessage name="tamanho" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Gênero:&nbsp;</label></td>
                                    <td>
                                        <div>                                                
                                            <Field as="select" name="genero">
                                                <option value="Masculino">Masculino</option>
                                                <option value="Feminino">Feminino</option>
                                            </Field>
                                            <ErrorMessage name="genero" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>ID do Estilo:&nbsp;</label></td>
                                    <td>
                                        <div>                                                
                                            <Field name="estilo_id" type="text" placeholder="ID do Estilo" />
                                            <ErrorMessage name="estilo_id" />
                                        </div>
                                    </td>
                                </tr>
                
                                <tr>
                                    <td><label>Preço:&nbsp;</label></td>
                                    <td>
                                        <div>                                                
                                            <Field name="preco" type="text" placeholder="Preço" />
                                            <ErrorMessage name="preco" />
                                        </div>
                                    </td>
                                </tr>
                
                            </table>
                            <br />                        

                            <button type="submit">
                                Incluir Produto
                            </button>
                            {!error && prodIncluded && <h1>Produto Incluído com Sucesso !</h1>}
                            {error && <h1>{error}</h1>}
                        </Form>
                    )}
                />
            </Wrap>
        </>
    );
}

export default IncluiProduto;