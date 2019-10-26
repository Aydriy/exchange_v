import React from "react";
import { render } from "react-dom";
import '../scss/style.sass';
import Routes from './routes.jsx';
export { default as Button } from './components/Button.jsx';
export { default as InputBlock } from './components/InputBlock.jsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css';


render(<Routes />, document.getElementById("app"));
