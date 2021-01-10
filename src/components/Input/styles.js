import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.base[400]};
  margin-bottom: 0.7rem;
`;

export const InputStyle = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.base[100]};
  border: ${({ error, theme }) =>
    `1px solid ${error ? theme.colors.red : theme.colors.base[200]}`};
  border-radius: 0.3rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.base[500]};
  text-align: ${({ align }) => align};
  padding: 1.4rem;
  caret-color: ${({ theme }) => theme.colors.base[500]};

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.blue}`};
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.base[300]};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.base[300]};
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const Error = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.red};
  margin-top: 0.3rem;
`;

export const Eye = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  background: none;
  border: none;

  & > svg {
    color: ${({ theme }) => theme.colors.base[400]};
    font-size: ${({ theme }) => theme.fontSizes.xl};

    &:hover {
      color: ${({ theme }) => theme.colors.base[500]};
    }
  }
`;
