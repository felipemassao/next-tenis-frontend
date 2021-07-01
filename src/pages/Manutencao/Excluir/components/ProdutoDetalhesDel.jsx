import axios from 'axios';
import React, { useState } from "react";
import { Wrap, Form } from "../../../../styles/components/Home.style";
import { Formik, Field, ErrorMessage } from 'formik';
import prodSchema from '../../../Schemas/prodSchema';
import { history } from '../../../history';

const DetalheProdutoDel = ({ Produto }) => {
    const [prodModified, setProdModified] = useState(false);

    function onSubmit(values, actions) {
        console.log("Vou deletar")
        console.log(Produto.id)
        
        axios.delete(`${process.env.REACT_APP_BASE_URL}/produtos/${Produto.id}`)
        history.push("/manutencao/okDel")
    }  

  return (
    <Wrap>
    <h3>Exclusão de Produto</h3>
    <Formik
        onSubmit={onSubmit}
        validationSchema={prodSchema}
        validateOnMount
        initialValues={{ 
            id: Produto.id, 
            descricao: Produto.descricao,
            marca_id: Produto.marca_id,
            modelo: Produto.modelo,
            cor_id: Produto.cor_id,
            tamanho: Produto.tamanho,
            genero: Produto.genero,
            estilo_id: Produto.estilo_id,
            preco: Produto.preco  
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
                            <Field name="genero" type="text" placeholder="Gênero" />
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

                <button type="submit" onClick={() => onSubmit(Produto.id)}>Delete</button>
            </Form>
        )}
    />
    </Wrap>
  );
};

export default DetalheProdutoDel;
