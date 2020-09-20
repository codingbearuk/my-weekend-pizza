import { createGlobalStyle } from 'styled-components';
import { background, white, red, ultraTransparetnWhite } from './colors';

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
    overflow-x: hidden;

    ::-webkit-scrollbar{
        width: 8px;
        background-color: ${ultraTransparetnWhite};

    }

    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${red};
    }
  }

  h1, h2 {
    font-family: 'bradley hand';
    text-align: center;
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
