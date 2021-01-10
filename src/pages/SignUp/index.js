import React, { useCallback } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function SignUp() {
  const handleSubmit = useCallback((e) => {
    console.log(e);
  }, []);
  return (
    <div>
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default SignUp;
