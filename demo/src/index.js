import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

import App from './app';

import './theme.scss';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const renderApp = () => {
  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('demo'))
};

if (module.hot) {
  module.hot.accept('.', () => {
    renderApp();
  });
}

renderApp();
