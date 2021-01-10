import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  padding: 1.6rem 0;
  border-top: ${({ theme }) => `1px solid ${theme.colors.base[300]}`};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.base[400]};
  text-align: center;

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
  }
`;
