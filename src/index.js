import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import SyzygyApp from './containers/SyzygyApp';
//import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<SyzygyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
