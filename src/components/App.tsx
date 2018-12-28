import React from 'react';
import '../styles/global.scss';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import Header from './Header/Header';

const App = () => (
  <>
    <Header />
    <Switch>
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </>
);

export default App;
