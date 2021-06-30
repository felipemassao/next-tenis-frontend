import axios from 'axios';
import React, { useState } from "react";
import { Wrap } from "../../../../styles/components/Home.style";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import userSchema from '../../../Schemas/userSchema';
import { history } from '../../../history';

const DetalheUsuario = ({ Usuario }) => {
    //      estado        método, utilizado para alterar o estado
    const [userModified, setUserModified] = useState(false);

    function onSubmit(values, actions) {
        axios.put(`${process.env.REACT_APP_BASE_URL}/users/${Usuario.id}`, values)

        console.log('SUBMIT: ', values);
        history.push("/manutencao/okAlter")
    }  

  return (
    <Wrap>
    <h3>Alteração de Usuário</h3>
    <Formik
        onSubmit={onSubmit}
        validationSchema={userSchema}
        validateOnMount
        initialValues={{ id: Usuario.id, username: Usuario.username, email: Usuario.email, password: '' 
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
                    Alterar Usuário
                </button>
            </Form>
        )}
    />
    </Wrap>
  );
};

export default DetalheUsuario;
