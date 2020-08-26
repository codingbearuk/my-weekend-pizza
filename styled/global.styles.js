import { createGlobalStyle } from "styled-components";
import { background, white } from "./colors";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'bradley hand';
    src: url('fonts/bradhitc.ttf');
  }
  @font-face {
    font-family: 'Helvetica';
    src: url('fonts/Helvetica.ttf');
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
    font-family: 'bradley hand'
  }
  p{
    font-family: 'Helvetica'
  }
`;

export default GlobalStyle;
