import { createGlobalStyle } from 'styled-components';
import { background, white } from './colors';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'bradley hand';
    src: url('fonts/bradhitc.ttf');
  }
  @font-face {
    font-family: 'helvetica';
    src: url('fonts/Helvetica.ttf');
  }
  @font-face {
    font-family: 'helvetica-light';
    src: url('fonts/helvetica-light.ttf');
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    background: ${background};
    color: ${white};
    margin: 0;
    padding: 0;
  }
  h1, h2 {
    font-family: 'bradley hand';
  }
  p{
    font-family: 'helvetica';
  }
  button {
    font-family: 'helvetica-light';
    font-weight: 100;
  }
`;

export default GlobalStyle;
