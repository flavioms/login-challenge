import * as Yup from 'yup';
import { format, subYears } from 'date-fns';

const maxDate = format(subYears(new Date(), 18), 'yyyy-MM-dd');
const minDate = format(subYears(new Date(), 100), 'yyyy-MM-dd');

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um email válido')
    .required('O campo email é obrigatório'),
  name: Yup.string()
    .min(2, 'Mínimo de 2 caracteres')
    .max(100, 'Máximo de 100 caracteres')
    .required('O campo nome é obrigatório'),
  cpf: Yup.string().required('O campo cpf é obrigatório'),
  birthday: Yup.date()
    .max(maxDate, 'Idade mínima de 18 anos')
    .min(minDate, 'Idade máxima de 100 anos')
    .required('A data de nascimento é obrigatória'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('O campo senha é obrigatório'),
  term: Yup.bool().oneOf([true], 'A confirmação das politicas é obrigatória'),
});

export default schema;
