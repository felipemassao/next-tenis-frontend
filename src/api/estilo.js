import axios from 'axios';

const listEstilo = () => axios(`${process.env.REACT_APP_BASE_URL}/estilos/`).then(result => result.data);

export { listEstilo };
