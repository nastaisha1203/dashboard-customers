import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
     background-color: rgba(250, 251, 255, 1);
;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  ul, ol {
    list-style: none;
  }
  h1, h2, ul, ol, p {
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
    } 
  a {
    text-decoration: none;
  }
`;
