import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper, Checkbox, Text, Error } from './styles';

function Confirm({ name, id, value, text, error, testid, onChange, disabled }) {
  return (
    <Container>
      <Wrapper htmlFor={id}>
        <Checkbox>
          <input
            type='checkbox'
            name={name}
            id={id}
            checked={value}
            data-testid={testid}
            disabled={disabled}
            onChange={onChange}
            error={error}
          />
          <span className='checkmark' />
        </Checkbox>
        <Text>{text}</Text>
      </Wrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

Confirm.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  text: PropTypes.node,
  error: PropTypes.string,
  testid: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Confirm.defaultProps = {
  text: '',
  error: null,
  testid: '',
  disabled: false,
};

export default Confirm;
