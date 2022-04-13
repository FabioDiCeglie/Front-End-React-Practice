import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
      font-family: font-family: 'Open Sans', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap')}
    margin: 0;
    padding: 0;
    background: black;
  }
`;

export default GlobalStyle;
