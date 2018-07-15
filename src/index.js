import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
