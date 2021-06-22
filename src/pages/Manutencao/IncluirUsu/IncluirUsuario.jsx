import axios from 'axios';
import React, { useState } from 'react';
import { Formik } from 'formik';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { Wrap } from "../../../styles/components/Home.style";
import { history } from '../../history';

const IncluiUsuario = () => {

    //      estado        método, utilizado para alterar o estado
    const [userIncluded, useUserIncluded] = useState(false);

    return (
        <>
            <HeaderManutencao />
            <Wrap>
                <h3>Inclusão de Usuário</h3>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // alert(JSON.stringify(values, null, 2))
                        axios.post(`${process.env.REACT_APP_BASE_URL}/users/cadastrar`, values)
                        alert("Usuário Incluído !")
                        // history.push('/manutencao')
                        // useUserIncluded(true)
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
                                type="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                            {errors.username && touched.username && errors.username}
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <Wrap>
                                <button type="submit" disabled={isSubmitting}>
                                    Incluir Usuário
                                </button>
                            </Wrap>
                            {userIncluded && <h1>Usuário Incluído com Sucesso !</h1>}
                        </form>
                    )}
                </Formik>
            </Wrap>
        </>
    );
}

export default IncluiUsuario;