import axios from 'axios';

const listCor = () => axios(`${process.env.REACT_APP_BASE_URL}/cores/`).then(result => result.data);

export { listCor };
