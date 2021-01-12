import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ToastItem } from './styles';

function Toast() {
  const { toasts } = useSelector((store) => store.toast);

  if (!toasts) {
    return null;
  }

  return (
    <Container>
      {toasts.map((toast) => (
        <ToastItem key={toast.type} type={toast.type}>
          {toast.message}
        </ToastItem>
      ))}
    </Container>
  );
}

export default Toast;
