import axios from 'axios';
const API_URL = "http://localhost:3001/"

const getListarProdutos = () => axios(API_URL + "produtos").then(result => result.data);
export default getListarProdutos;