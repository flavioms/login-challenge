import styled from 'styled-components';
import { mixinRespondTo } from '~/styles/tools';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
export const Image = styled.img`
  height: 110%;
`;
export const Left = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Right = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 38rem;
  margin-top: 3.8rem;
  padding: 2.4rem;

  ${mixinRespondTo.sm`
    max-width: 100%;
  `}
`;
