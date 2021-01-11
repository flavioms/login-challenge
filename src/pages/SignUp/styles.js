import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
export const Image = styled.img`
  height: 100%;
`;
export const Left = styled.div`
  height: 100vh;
  overflow: hidden;
`;
export const Right = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 32rem;
  margin-top: 3.8rem;
`;
