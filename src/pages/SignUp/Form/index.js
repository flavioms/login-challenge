import React from 'react';
import { useFormik } from 'formik';
import { func } from 'prop-types';
// import { Container } from './styles';

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
    <form data-testid='form-signup' onSubmit={formik.handleSubmit}>
      <input
        type='email'
        name='email'
        id='email'
        data-testid='email'
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <input
        type='text'
        name='cpf'
        id='cpf'
        data-testid='cpf'
        value={formik.values.cpf}
        onChange={formik.handleChange}
      />
      <input
        type='date'
        name='birthday'
        id='birthday'
        data-testid='birthday'
        value={formik.values.birthday}
        onChange={formik.handleChange}
      />
      <input
        type='password'
        name='password'
        id='password'
        data-testid='password'
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
    </form>
  );
}

Form.propTypes = {
  handleSubmit: func.isRequired,
};

export default React.memo(Form);
