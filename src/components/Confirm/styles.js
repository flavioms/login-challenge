import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border: ${({ error, theme }) =>
    `1px solid ${error ? theme.colors.red : theme.colors.base[200]}`};
  border-radius: 0.3rem;
  padding: 0.7rem 1.2rem;
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.div`
  display: block;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    color: ${({ theme }) => theme.colors.base[100]};
    border: ${({ theme }) => `1px solid ${theme.colors.base[300]}`};
    border-radius: 0.5rem;
  }

  &:hover input ~ .checkmark {
    color: ${({ theme }) => theme.colors.base[300]};
  }

  input:checked ~ .checkmark {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    position: absolute;
    left: 25%;
    top: 50%;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg) translate(-50%, -50%);
    -ms-transform: rotate(45deg) translate(-50%, -50%);
    transform: rotate(45deg) translate(-50%, -50%);
  }
`;

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.base[300]};
  margin-left: 1.2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Error = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.red};
  margin-top: 0.3rem;
`;
