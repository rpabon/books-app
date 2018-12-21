import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';

const clientApp = <App />;

ReactDOM.hydrate(clientApp, document.getElementById('root'));
