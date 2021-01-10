import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    base: {
      100: '#FFFFFF',
      200: '#e6e6e6',
      300: '#cccccc',
      400: '#8f8f8f',
      500: '#333333',
    },
    blue: '#4c8afe',
    green: '#2ecc71',
    red: '#ff5863',
  },
  fontSizes: {
    xs: '1.2rem',
    sm: '1.4rem',

    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.4rem',
    xxl: '3rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    heavy: 900,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Theme;
