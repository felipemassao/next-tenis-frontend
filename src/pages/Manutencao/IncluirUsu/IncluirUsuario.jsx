import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from '../../../schema';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { Wrap } from "../../../styles/components/Home.style";
import usePostUsuario from "../../../hooks/usePostUsuario";
import { history } from '../../history';

const IncluiUsuario = () => {
    //      estado        método, utilizado para alterar o estado
    const [userIncluded, setUserIncluded] = useState(false);

    function onSubmit(values, actions) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/users/cadastrar`, values)
        setUserIncluded(true)
        
        console.log('SUBMIT: ', values);
        // history.push('/manutencao')
    }

    return (
        <>
            <HeaderManutencao />
            <Wrap>
                <h3>Inclusão de Usuário</h3>
                <Formik
                    onSubmit={onSubmit}
                    validationSchema={schema}
                    validateOnMount
                    initialValues={{ username: '', email: '', password: '' 
                }}    
                    render={({values, errors}) => (
                        <Form> 
                            <div>
                                <Field name="username" type="text" placeholder="Username" />
                                <ErrorMessage name="username" />
                            </div>
                            <div>
                                <Field name="email" type="email" placeholder="E-Mail" />
                                <ErrorMessage name="email" />
                            </div>
                            <div>
                                <Field name="password" type="password" placeholder="Password" />
                                <ErrorMessage name="password" />
                            </div>
                            <br />
                            <button type="submit">
                                Incluir Usuário
                            </button>
                            {userIncluded && <h1>Usuário Incluído com Sucesso !</h1>}
                        </Form>
                    )}
                />
            </Wrap>
        </>
    );
}

export default IncluiUsuario;