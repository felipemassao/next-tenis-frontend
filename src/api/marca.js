import axios from 'axios';

const listMarca = () => axios(`${process.env.REACT_APP_BASE_URL}/marcas/`).then(result => result.data);

export { listMarca };
