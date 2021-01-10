import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, InputStyle, Error } from './styles';

function Input({
  label,
  name,
  id,
  value,
  type,
  error,
  testid,
  onChange,
  onBlur,
  placeholder,
  disabled,
}) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputStyle
        type={type}
        id={id}
        data-testid={testid}
        name={name}
        value={value}
        error={error}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testid: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  testid: null,
  error: null,
  onChange: undefined,
  onBlur: undefined,
  placeholder: '',
  disabled: false,
};

export default Input;
