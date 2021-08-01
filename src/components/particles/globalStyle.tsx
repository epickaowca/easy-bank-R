import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

`;

export default GlobalStyles;
