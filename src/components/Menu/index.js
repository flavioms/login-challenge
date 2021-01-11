import React from 'react';

import { Container } from './styles';
import LogoIcon from '~/assets/icon/logo.png';

function Menu() {
  return (
    <Container>
      <img src={LogoIcon} alt='logo' />
    </Container>
  );
}

export default Menu;
