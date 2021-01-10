/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { AiFillEye } from 'react-icons/ai';
import { Container, Label, InputStyle, Error, Eye } from './styles';

function Input({
  label,
  name,
  id,
  value,
  type,
  mask,
  error,
  testid,
  onChange,
  onBlur,
  placeholder,
  disabled,
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const ShowPassword = () => (
    <Eye
      onClick={() => setPasswordVisible(!passwordVisible)}
      data-testid='showPassword'
    >
      <AiFillEye />
    </Eye>
  );

  const handleVerifyPassword = (_type) => {
    if (_type === 'password') {
      return passwordVisible ? 'text' : 'password';
    }
    return _type;
  };

  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      {mask ? (
        <InputMask
          mask={mask}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        >
          {(inputProps) => (
            <InputStyle
              type={type}
              data-testid={testid}
              error={error}
              placeholder={placeholder}
              disableUnderline
              {...inputProps}
            />
          )}
        </InputMask>
      ) : (
        <InputStyle
          type={handleVerifyPassword(type)}
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
      )}
      {type === 'password' && <ShowPassword />}
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
  mask: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  type: 'text',
  mask: null,
  testid: null,
  error: null,
  onChange: undefined,
  onBlur: undefined,
  placeholder: '',
  disabled: false,
};

export default Input;
