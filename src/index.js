import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// REDUX

import { Provider } from 'react-redux';

import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
