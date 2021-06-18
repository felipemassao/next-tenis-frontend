import React from 'react';
import {useFormik} from "formik";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import HeaderManutencao from '../../../components/HeaderManutencao';
import { history } from '../../history';

import {
    Form,
    Input,
    Wrap
} from "../../../styles/components/Home.style";

const IncluiUsuario = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
    });

    const onIncludeUserClick = ()=> {
        console.log(formik.username)
        axios.post(`${process.env.REACT_APP_BASE_URL}/users/cadastrar`, { username: formik.username, email: formik.email, password: formik.password }).then(result => result.data) 
        history.push('/manutencao')
    }

    return (
        <>
        <HeaderManutencao />

        <Container>
            <Wrap>
                <h3>Inclusão de Usuários</h3>
                <Form onSubmit={formik.handleSubmit}>
                    <Input type="text"
                           name="username"
                           placeholder="Username"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.username}
                    />
                    <Input type="email"
                           name="email"
                           placeholder="email"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.email}
                    />
                     <Input type="password"
                           name="password"
                           placeholder="password"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.password}
                    />
                </Form>
            </Wrap>

            <button onClick={onIncludeUserClick}>
                Efetuar inclusão
            </button> 

        </Container>
      </>
    );
}

export default IncluiUsuario;