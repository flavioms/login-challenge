import styled, { css } from 'styled-components';

const validateType = (type) => {
  switch (type) {
    case 'error':
      return css`
        background: ${({ theme }) => theme.colors.red};
      `;
    case 'success':
      return css`
        background: ${({ theme }) => theme.colors.green};
      `;

    case 'info':
      return css`
        background: ${({ theme }) => theme.colors.blue};
      `;
    default:
      return css`
        background: ${({ theme }) => theme.colors.green};
      `;
  }
};

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  max-height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => validateType(type)}
`;

export const ToastItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.base[100]};
`;
