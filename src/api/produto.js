import axios from 'axios';
const API_URL = "http://localhost:3001/"

const getProduto = (id) => axios(API_URL + "produtos/" + id).then(result => result.data);

const listProduto = () => axios(API_URL + "produtos/").then(result => result.data);

export { getProduto, listProduto };
