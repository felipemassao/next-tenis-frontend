import * as Yup from 'yup';

const prodSchema = Yup.object().shape({
    descricao: Yup.string().min(4, "Mínimo de 4 caracteres").required("Preenchimento obrigatório"),
    marca_id: Yup.string().min(1).required("Preenchimento obrigatório"),
    modelo: Yup.string().min(1).required("Preenchimento obrigatório"),
    cor_id: Yup.string().min(1).required("Preenchimento obrigatório"),
    tamanho: Yup.string().min(2).required("Preenchimento obrigatório"),
    genero: Yup.string().min(8).required("Preenchimento obrigatório"),
    estilo_id: Yup.string().min(1).required("Preenchimento obrigatório"),
    preco: Yup.string().min(2).required("Preenchimento obrigatório"),
})

export default prodSchema;