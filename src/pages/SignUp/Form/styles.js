import styled from 'styled-components';
import { mixinRespondTo } from '~/styles/tools';

export const Container = styled.form`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  & > div {
    margin-left: 0;
    margin-right: 0;
  }
  & > div:first-child {
    margin-right: 2.4rem;
  }

  ${mixinRespondTo.sm`
    flex-direction: column;
  `}
`;
