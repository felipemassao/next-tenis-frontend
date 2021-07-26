import axios from 'axios';
// import React, { useState } from 'react';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import userSchema from '../../Schemas/userSchema';
import { Wrap } from "../../../styles/components/Home.style";
import { history } from '../../history';
import Header from "../../../components/Header";

const IncluiUsuario = () => {
    //      estado        método, utilizado para alterar o estado
    // const [userIncluded, setUserIncluded] = useState(false);

    function onSubmit(values, actions) {
        axios.post(`${process.env.REACT_APP_BASE_URL}/users/cadastrar`, values)
        
        console.log('SUBMIT: ', values);
        history.push("/manutencao/okInclu")
    }

    return (
        <>
            <Header />
            <Wrap>
                <h3>Inclusão de Usuário</h3>
                <Formik
                    onSubmit={onSubmit}
                    validationSchema={userSchema}
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
                        </Form>
                    )}
                />
            </Wrap>
        </>
    );
}

export default IncluiUsuario;