import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-x: hidden;
    height: 100%;
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
  li {
    list-style-type: none;
  }

  html{
    font-size: 16px;
  }
  ${(p) => p.theme.media.desktop}{
    html{
      font-size: 18px;
    }
  }
  ${(p) => p.theme.media.desktop1600}{
    html{
      font-size: 22px;
    }
  }
  ${(p) => p.theme.media.desktop1900}{
    html{
      font-size: 22px;
    }
  }
`;

export default GlobalStyles;
