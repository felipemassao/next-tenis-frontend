import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { history } from '../history';
import Container from "react-bootstrap/Container";

import {
    Button,
    Form,
    Input,
    Title,
    WrapLogin,
    BackgroundLogin
} from "../../styles/components/Home.style";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values)
            axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, values)            
/*             axios.post(process.env.API_URL + 'users/login', values, {headers:{
                'x-access-token': 
            }}) */
                .then(resp => {
                    const { data } = resp
                    if (data) {
                        localStorage.setItem('app-token', JSON.stringify(data))
                        history.push('/manutencao')
                    }
                }).catch(error => {
                    console.log("Deu erro ", error)
                    history.push('/0')
                })
                    
        }

    });

    return (
      <BackgroundLogin>
        <Container>
            <WrapLogin>
                <Title>Login Usuário</Title>
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username" hidden>Entre com seu nome de usuário</label>
                    <Input type="text"
                           name="username"
                           placeholder="Entre com seu nome de usuário"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.username}
                    />
                    <label htmlFor="password" hidden>Entre a senha</label>
                    <Input type="password"
                           name="password"
                           placeholder="Entre com a senha"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.password}
                    />                    
                    <Button type="submit">Entrar</Button>
                </Form>
            </WrapLogin>
        </Container>
      </BackgroundLogin>
    );
}

export default Login;