import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.base[100]};
  padding: 1.4rem 2rem;
  margin: 2rem 0;
  border-radius: 0.3rem;
  border: none;
  background: ${({ theme }) => theme.colors.blue};

  & > svg {
    margin-left: 10%;
    margin-right: 30%;
  }

  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.blue)};
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.base[300]};
      color: ${theme.colors.base[500]};
      cursor: 'no-drop';
    `};
`;
