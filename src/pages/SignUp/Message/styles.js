import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  bottom: 0;
  right: 0;
  padding: 4rem;
  text-align: right;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 16%,
    rgba(0, 0, 0, 0.2) 42%,
    rgba(0, 0, 0, 0.5) 69%,
    rgba(0, 0, 0, 0.8) 96%
  );

  & > p {
    font-size: 2rem;
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.base[100]};
  }

  & > span {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    color: ${({ theme }) => theme.colors.base[100]};
  }
`;
