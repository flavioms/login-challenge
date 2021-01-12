import styled from 'styled-components';
import { mixinRespondTo } from '~/styles/tools';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;

  ${mixinRespondTo.sm`
    text-align: left;
    align-items: flex-start;
  `}
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.base[500]};
  margin-bottom: 0.6rem;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.base[400]};
`;
