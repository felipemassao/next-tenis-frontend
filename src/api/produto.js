import axios from 'axios';

const getProduto = (id) => axios(`${process.env.REACT_APP_BASE_URL}/produtos/` + id).then(result => result.data);
const listProduto = () => axios(`${process.env.REACT_APP_BASE_URL}/produtos/`).then(result => result.data);

export { getProduto, listProduto };
