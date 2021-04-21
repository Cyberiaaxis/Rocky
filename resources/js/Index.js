import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";

import './styles/style.scss';
import './styles/index.scss';
import './styles/responsive.scss';


ReactDOM.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);