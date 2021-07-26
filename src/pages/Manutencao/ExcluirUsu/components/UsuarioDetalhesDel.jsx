import axios from 'axios';
import React from "react";
import { Wrap } from "../../../../styles/components/Home.style";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import userSchema from '../../../Schemas/userSchema';
import { history } from '../../../history';

const DetalheUsuarioDel = ({ Usuario }) => {
    // const [userModified, setUserModified] = useState(false);

    function onSubmit(values, actions) {
        console.log(Usuario.id)
        axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${Usuario.id}`)
        history.push("/manutencao/okDel")
    }  

  return (
    <Wrap>
    <h3>Exclusão de Usuário</h3>
    <Formik
        onSubmit={onSubmit}
        validationSchema={userSchema}
        validateOnMount
        initialValues={{ id: Usuario.id, username: Usuario.username, email: Usuario.email 
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
                <br />
                <button type="submit" onClick={() => onSubmit(Usuario.id)}>Delete</button>
            </Form>
        )}
    />
    </Wrap>
  );
};

export default DetalheUsuarioDel;
