import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 5.6rem;
  background: ${({ theme }) => theme.colors.base[100]};
  padding: 1.6rem 3.2rem;
`;
