import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Button({ id, type, label, Icon, testid, disabled, onClick }) {
  return (
    <Container
      id={id}
      type={type}
      disabled={disabled}
      data-testid={testid}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {label}
    </Container>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  Icon: PropTypes.node,
  testid: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  id: '',
  type: 'button',
  label: '',
  Icon: null,
  disabled: false,
  testid: '',
};

export default Button;
