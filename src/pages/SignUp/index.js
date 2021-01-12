import React, { useCallback } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Message from './Message';
import Toast from '~/components/Toast';
import Menu from '~/components/Menu';
import UnsplashImg from '~/assets/img/unsplash.jpg';
import { Container, Image, Left, Right, RightWrapper } from './styles';

function SignUp() {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <Left>
        <Image src={UnsplashImg} />
        <Message />
      </Left>

      <Right>
        <Toast />
        <Menu />
        <RightWrapper>
          <Header />
          <Form handleSubmit={handleSubmit} />
          <Footer />
        </RightWrapper>
      </Right>
    </Container>
  );
}

export default SignUp;
