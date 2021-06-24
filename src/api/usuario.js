import axios from 'axios';
const API_URL = "http://localhost:3001/"

const postUsuario = (values) => axios.post(`${process.env.REACT_APP_BASE_URL}/users/cadastrar`, values);

const listUsuario = () => axios.get(`${process.env.REACT_APP_BASE_URL}/users`).then(result => result.data);

export { postUsuario, listUsuario };
