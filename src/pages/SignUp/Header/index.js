import React from 'react';

import { Container, Title, Subtitle } from './styles';

function Header() {
  return (
    <Container>
      <Title>Criar meu cadastro</Title>
      <Subtitle>
        Para acompanhar sua contratação de crédito você utilizará seu e-mail e
        CPF.
      </Subtitle>
    </Container>
  );
}

export default Header;
