import axios from 'axios';
import React, { useState } from "react";
import { Wrap } from "../../../../styles/components/Home.style";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import prodSchema from '../../../Schemas/prodSchema';
import { history } from '../../../history';

const DetalheProduto = ({ Produto }) => {
    //      estado        método, utilizado para alterar o estado
    const [prodModified, setProdModified] = useState(false);

    function onSubmit(values, actions) {

        console.log(Produto.id)
        console.log(values)

        axios.put(`${process.env.REACT_APP_BASE_URL}/produtos/${Produto.id}`, values)

        console.log('SUBMIT: ', values);
        history.push("/manutencao/okAlter")
    }  

  return (
    <Wrap>
    <h3>Alteração de Produto</h3>
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
                            <Field name="descricao" type="text" placeholder="Descrição" fullWidth/>
                            <ErrorMessage name="descricao" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>ID da Marca:&nbsp;</label></td>
                    <td>
                        <div>                   
                            <Field name="marca_id" type="text" placeholder="ID da Marca" fullWidth/>
                            <ErrorMessage name="marca_id" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>Modelo:&nbsp;</label></td>
                    <td>
                        <div>                  
                            <Field name="modelo" type="text" placeholder="Modelo" fullWidth/>
                            <ErrorMessage name="modelo" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>ID da Cor:&nbsp;</label></td>
                    <td>
                        <div>                    
                            <Field name="cor_id" type="text" placeholder="ID da Cor" fullWidth/>
                            <ErrorMessage name="cor_id" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>Tamanho:&nbsp;</label></td>
                    <td>
                        <div>                                                
                            <Field name="tamanho" type="text" placeholder="Tamanho" fullWidth/>
                            <ErrorMessage name="tamanho" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>Gênero:&nbsp;</label></td>
                    <td>
                        <div>                                                
                            <Field name="genero" type="text" placeholder="Gênero" fullWidth/>
                            <ErrorMessage name="genero" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>ID do Estilo:&nbsp;</label></td>
                    <td>
                        <div>                                                
                            <Field name="estilo_id" type="text" placeholder="ID do Estilo" fullWidth/>
                            <ErrorMessage name="estilo_id" />
                        </div>
                    </td>
                </tr>

                <tr>
                    <td><label>Preço:&nbsp;</label></td>
                    <td>
                        <div>                                                
                            <Field name="preco" type="text" placeholder="Preço" fullWidth/>
                            <ErrorMessage name="preco" />
                        </div>
                    </td>
                </tr>

            </table>
            <br />

                <button type="submit" onClick={() => onSubmit(values)}>Alterar Produto</button>

{/*                 <button type="submit">
                    Alterar Produto
                </button> */}

          </Form>
        )}
    />
    </Wrap>
  );
};

export default DetalheProduto;
