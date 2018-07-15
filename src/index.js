import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "./components/themes/theme";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }

  input {
    font-family: 'Rubik', sans-serif;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
