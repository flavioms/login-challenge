import React from 'react';
import { useFormik } from 'formik';
import { func } from 'prop-types';
import Input from '~/components/Input';
import { Container } from './styles';

function Form({ handleSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      cpf: '',
      birthday: '',
      password: '',
      term: false,
    },
    onSubmit: handleSubmit,
  });
  return (
    <Container data-testid='form-signup' onSubmit={formik.handleSubmit}>
      <Input
        type='email'
        name='email'
        id='email'
        label='E-mail'
        placeholder='Informe seu e-mail'
        testid='email'
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        type='text'
        name='cpf'
        id='cpf'
        label='CPF'
        testid='cpf'
        mask='999.999.999-99'
        placeholder='999.999.999-99'
        maskPlaceholder='999.999.999-99'
        value={formik.values.cpf}
        onChange={formik.handleChange}
      />
      <Input
        type='date'
        name='birthday'
        id='birthday'
        label='Data de Nascimento'
        testid='birthday'
        value={formik.values.birthday}
        onChange={formik.handleChange}
      />
      <Input
        type='password'
        name='password'
        id='password'
        label='Senha'
        testid='password'
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <input
        type='checkbox'
        name='term'
        id='term'
        data-testid='term'
        value={formik.values.term}
        onChange={formik.handleChange}
      />
      <button type='submit' data-testid='btn-submit'>
        Cadastrar
      </button>
    </Container>
  );
}

Form.propTypes = {
  handleSubmit: func.isRequired,
};

export default React.memo(Form);