import React from 'react';
import { useFormik } from 'formik';
import { func } from 'prop-types';
import { FaLock } from 'react-icons/fa';
import Input from '~/components/Input';
import Confirm from '~/components/Confirm';
import Button from '~/components/Button';
import { Container, Row } from './styles';
import validation from './validation';

function Form({ handleSubmit }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      cpf: '',
      birthday: '',
      password: '',
      term: false,
    },
    validationSchema: validation,
    validateOnChange: false,
    validateOnBlur: false,
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
        error={formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        type='text'
        name='name'
        id='name'
        label='Nome'
        placeholder='Informe seu nome'
        testid='name'
        error={formik.errors.name}
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <Row>
        <Input
          type='text'
          name='cpf'
          id='cpf'
          label='CPF'
          testid='cpf'
          mask='999.999.999-99'
          placeholder='999.999.999-99'
          maskPlaceholder='999.999.999-99'
          error={formik.errors.cpf}
          value={formik.values.cpf}
          onChange={formik.handleChange}
        />
        <Input
          type='date'
          name='birthday'
          id='birthday'
          label='Data de Nascimento'
          testid='birthday'
          error={formik.errors.birthday}
          value={formik.values.birthday}
          onChange={formik.handleChange}
        />
      </Row>
      <Input
        type='password'
        name='password'
        id='password'
        label='Senha'
        testid='password'
        error={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Confirm
        name='term'
        id='term'
        testid='term'
        text={
          <p>
            Li e estou de acordo com a <a href='/#'>Política de Privacidade</a>{' '}
            e a <a href='/#'>Política de Uso de Informações</a>.
          </p>
        }
        error={formik.errors.term}
        value={formik.values.term}
        onChange={formik.handleChange}
      />
      <Button
        type='submit'
        testid='btn-submit'
        label='Cadastrar'
        onClick={formik.handleSubmit}
        Icon={FaLock}
      />
    </Container>
  );
}

Form.propTypes = {
  handleSubmit: func.isRequired,
};

export default React.memo(Form);
