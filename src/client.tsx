import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import StoreProvider from './store/StoreProvider';

const ClientApp: FunctionComponent<{}> = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  );
};

ReactDOM.hydrate(<ClientApp />, document.getElementById('root'));
