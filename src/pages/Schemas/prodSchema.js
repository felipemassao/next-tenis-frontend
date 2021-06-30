import * as Yup from 'yup';

const prodSchema = Yup.object().shape({
    descricao: Yup.string().min(4, "Mínimo de 4 caracteres").required(),
    marca_id: Yup.string().min(1).required(),
    modelo: Yup.string().min(1).required(),
    cor_id: Yup.string().min(1).required(),
    tamanho: Yup.string().min(2).required(),
    genero: Yup.string().min(8, "Informe Feminino ou Masculino").required(),
    estilo_id: Yup.string().min(1).required(),
    preco: Yup.string().min(2).required(),
})

export default prodSchema;