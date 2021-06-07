import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './router/index';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { increase } from './redux/action';

const store = createStore(reducer);
store.dispatch(increase(11));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
