import { css } from 'styled-components';
import { theme } from './theme';

export const mixinRespondTo = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${theme.breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
