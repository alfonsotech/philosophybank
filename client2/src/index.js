import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//get browserRouter from react-router-dom, wrap app component in that, so you have acess to the history object

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root"));
registerServiceWorker();
