import axios from 'axios';

const postUsuario = (values) => axios.post(`${process.env.REACT_APP_BASE_URL}/users/cadastrar`, values);
const listUsuario = () => axios.get(`${process.env.REACT_APP_BASE_URL}/users`).then(result => result.data);
const getUsuario = (id) => axios(`${process.env.REACT_APP_BASE_URL}/users/` + id).then(result => result.data);
const delUsuario = (id) => axios.delete(`${process.env.REACT_APP_BASE_URL}/users` + id).then(result => result.data);

export { postUsuario, listUsuario, getUsuario, delUsuario };
