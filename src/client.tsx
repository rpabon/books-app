import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers';
import App from './components/App';

const store = createStore(
  rootReducer,
  window.__STORE__,
  applyMiddleware(thunkMiddleware)
);

const ClientApp: FunctionComponent<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<ClientApp />, document.getElementById('root'));
