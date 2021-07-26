import axios from 'axios';
import React from "react";
import { Wrap } from "../../../../styles/components/Home.style";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import prodSchema from '../../../Schemas/prodSchema';
import { history } from '../../../history';
import useListMarca from '../../../../hooks/useListMarca';
import useListCor from '../../../../hooks/useListCor';
import useListEstilo from '../../../../hooks/useListEstilo';

const DetalheProduto = ({ Produto }) => {
    //      estado        método, utilizado para alterar o estado
    // const [prodModified, setProdModified] = useState(false);

    const { marcas } = useListMarca();
    //console.log(marcas)

    const { cores } = useListCor();
    //console.log(cores)

    const { estilos } = useListEstilo();
    //console.log(estilos)

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
                                    <td><label>Descrição:</label></td>
                                    <td>
                                        <div>                            
                                            <Field name="descricao" type="text" />
                                            <ErrorMessage name="descricao" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Marca:</label></td>
                                    <td>
                                        <div>                   
                                            <Field as="select" name="marca_id">
                                                <option value=""></option>
                                                {marcas.map(marca=>(
                                                  <option key={marca.id} value={marca.id}>{marca.descricao}</option>  
                                                ))}
                                            </Field>
                                            <ErrorMessage name="marca_id" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Modelo:</label></td>
                                    <td>
                                        <div>                  
                                            <Field name="modelo" type="text" />
                                            <ErrorMessage name="modelo" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Cor:</label></td>
                                    <td>
                                        <div>                    
                                            <Field as="select" name="cor_id">
                                                <option value=""></option>
                                                {cores.map(cor=>(
                                                  <option key={cor.id} value={cor.id}>{cor.descricao}</option>  
                                                ))}
                                            </Field>
                                            <ErrorMessage name="cor_id" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Tamanho:</label></td>
                                    <td>
                                        <div>                                                
                                            <Field as="select" name="tamanho">
                                                <option value=""></option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="35">35</option>
                                                <option value="36">36</option>
                                                <option value="37">37</option>
                                                <option value="38">38</option>
                                                <option value="39">39</option>
                                                <option value="40">40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                                <option value="43">43</option>
                                                <option value="44">44</option>
                                                <option value="45">45</option>
                                                <option value="46">46</option>
                                                <option value="47">47</option>
                                                <option value="48">48</option>
                                            </Field>
                                            <ErrorMessage name="tamanho" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Gênero:</label></td>
                                    <td>
                                        <div>                                                
                                            <Field as="select" name="genero">
                                                <option value=""></option>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Feminino">Feminino</option>
                                            </Field>
                                            <ErrorMessage name="genero" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Estilo:</label></td>
                                    <td>
                                        <div>                                                
                                            <Field as="select" name="estilo_id">
                                                <option value=""></option>
                                                {estilos.map(estilo=>(
                                                  <option key={estilo.id} value={estilo.id}>{estilo.descricao}</option>  
                                                ))}
                                            </Field>
                                            <ErrorMessage name="estilo_id" />
                                        </div>
                                    </td>
                                </tr>
                
                                <tr>
                                    <td><label>Preço:</label></td>
                                    <td>
                                        <div>                                                
                                            <Field name="preco" type="text" />
                                            <ErrorMessage name="preco" />
                                        </div>
                                    </td>
                                </tr>
                
                            </table>

            <br />

                <button type="submit" onClick={() => onSubmit(values)}>Alterar Produto</button>

          </Form>
        )}
    />
    </Wrap>
  );
};

export default DetalheProduto;
