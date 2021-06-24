import axios from 'axios';
import React from 'react';
import { Formik } from 'formik';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { Wrap } from "../../../styles/components/Home.style";
import { history } from '../../history';

const IncluiProduto = () => (
    <>
        <HeaderManutencao />
        <Wrap>
            <h3>Inclusão de Produto</h3>
            <Formik
                initialValues={{
                    descricao: '',
                    marca_id: '',
                    modelo: '',
                    cor_id: '',
                    tamanho: '',
                    genero: '',
                    estilo_id: '',
                    preco: ''
                }}
                validate={values => {
                    const errors = {};

                    if (!values.genero) {
                        errors.genero = 'Required';
                    } else if (values.genero !== 'Masculino' && values.genero !== 'Feminino') {
                        errors.genero = 'Gênero inválido, informe Masculino ou Feminino';
                    }

                    if (!values.tamanho) {
                        errors.tamanho = 'Required';
                    } else if (values.tamanho < 1 || values.tamanho > 59) {
                        errors.tamanho = 'Tamanho inválido, informe número maior 0 e menor 60';
                    }

                    return errors;
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        axios.post(`${process.env.REACT_APP_BASE_URL}/produtos`, values)
                        alert("Produto Incluído !")
                        history.push('/manutencao')
                        /*                     alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);  */
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="descricao"
                            name="descricao"
                            placeholder="Descrição"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.descricao}
                        />
                        {errors.descricao && touched.descricao && errors.descricao}

                        <input
                            type="marca_id"
                            name="marca_id"
                            placeholder="Id Marca"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.marca_id}
                        />
                        {errors.marca_id && touched.marca_id && errors.marca_id}

                        {/*                     <select>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select> */}


                        <input
                            type="modelo"
                            name="modelo"
                            placeholder="Modelo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.modelo}
                        />
                        {errors.modelo && touched.modelo && errors.modelo}

                        <input
                            type="cor_id"
                            name="cor_id"
                            placeholder="Id Cor"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cor_id}
                        />
                        {errors.cor_id && touched.cor_id && errors.cor_id}

                        <input
                            type="tamanho"
                            name="tamanho"
                            placeholder="Tamanho"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.tamanho}
                        />
                        {errors.tamanho && touched.tamanho && errors.tamanho}

                        <input
                            type="genero"
                            name="genero"
                            placeholder="Gênero"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.genero}
                        />
                        {errors.genero && touched.genero && errors.genero}

                        <input
                            type="estilo_id"
                            name="estilo_id"
                            placeholder="ID Estilo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.estilo_id}
                        />
                        {errors.estilo_id && touched.estilo_id && errors.estilo_id}

                        <input
                            type="preco"
                            name="preco"
                            placeholder="Preço"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.preco}
                        />
                        {errors.preco && touched.preco && errors.preco}

                        <Wrap>
                            <button type="submit" disabled={isSubmitting}>
                                Incluir Produto
                            </button>
                        </Wrap>
                    </form>
                )}
            </Formik>
        </Wrap>
    </>
);

export default IncluiProduto;