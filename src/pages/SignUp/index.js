import React, { useCallback } from 'react';
import Form from './Form';

function SignUp() {
  const handleSubmit = useCallback(() => {}, []);
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default SignUp;
