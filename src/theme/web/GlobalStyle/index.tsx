import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: sans-serif;
  }
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export default GlobalStyle;
