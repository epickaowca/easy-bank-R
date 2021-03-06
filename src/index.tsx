import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { myTheme } from "./components/particles/themeProvider/themeProvider";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/particles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
