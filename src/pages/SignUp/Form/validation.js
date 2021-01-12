import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um email válido')
    .required('O campo email é obrigatório'),
  name: Yup.string()
    .min(2, 'Mínimo de 2 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('O campo nome é obrigatório'),
  cpf: Yup.string().required('O campo cpf é obrigatório'),
  birthday: Yup.date().required('A data de nascimento é obrigatória'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('O campo senha é obrigatório'),
  term: Yup.bool().oneOf([true], 'A confirmação das politicas é obrigatória'),
});

export default schema;
