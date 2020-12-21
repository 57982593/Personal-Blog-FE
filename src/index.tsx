import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<<<<<<< HEAD
    <App/>,
    document.getElementById('root')
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
>>>>>>> aa9657eb3a71b7ec0db92ee58ab7edce7f2b6ae6
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
