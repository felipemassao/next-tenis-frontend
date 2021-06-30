import * as Yup from 'yup';

export default Yup.object().shape({
    username: Yup.string().min(4).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
})