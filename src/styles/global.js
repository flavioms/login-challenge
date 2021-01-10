import { createGlobalStyle } from 'styled-components';
import ArialMT from '~/assets/fonts/arialmt.ttf';

export default createGlobalStyle`
  
  @font-face {
    font-family: 'ArialMT';
    src: local('ArialMT'), url(${ArialMT});
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'ArialMT', sans-serif;
  }
  *:focus{
    outline: 0;
  }
  
  html {
    font-size: 62.5%;
  }

  html, body, #root{
    width: 100%;
    height: auto;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.base[100]};
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 { 
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }

  @media (max-width: 992px) {
    html {
      font-size: 50%;
    }
  }
`;
