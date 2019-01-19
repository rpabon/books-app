import express, { Request, Response } from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from '../components/App';
import bookListMiddleware from './middleware/book-list';
import bookMiddleware from './middleware/book';
import content from '../content';
import rootReducer from '../store/reducers';
import routes from '../routes';
import { StoreState } from '../interfaces';
import { SERVER_PORT } from './middleware/constants';

const htmlTemplate = (reactDOM: string, store: StoreState) => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>${content.appName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,500">
      <link href="/main.css" rel="stylesheet">
  </head>
  <body>
      <div id="root">${reactDOM}</div>
      <script>window.__STORE__ = ${JSON.stringify(store)}</script>
      <script src="/main.js"></script>
  </body>
  </html>
`;

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use('/fetch-books', bookListMiddleware);
app.use('/fetch-book', bookMiddleware);

app.get('/*', (req: Request, res: Response) => {
  const { url } = req;
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  const storeActions = routes
    .filter(route => matchPath(url, route))
    .filter(route => route.loadAction)
    .map(({ loadAction }) => store.dispatch(loadAction(req)));

  Promise.all(storeActions)
    .then(() => {
      const reactDOM = renderToString(
        <Provider store={store}>
          <StaticRouter location={url} context={{}}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const reduxStore = store.getState();

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlTemplate(reactDOM, reduxStore));
    })
    .catch(err => console.error(err));
});

app.listen(SERVER_PORT);
