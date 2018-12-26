import express, { Request, Response } from 'express';
import path from 'path';
import React, { useReducer } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../components/App';
import bookListMiddleware from './middleware/book-list';
import bookMiddleware from './middleware/book';
import routes from '../routes';
import { bookInitialState, bookReducer } from '../reducers/book';

const htmlTemplate = (reactDOM: string) => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Shit</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
      <div id="root">${reactDOM}</div>
      <script src="/main.js"></script>
  </body>
  </html>
`;

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.use('/fetch-books', bookListMiddleware);
app.use('/fetch-book', bookMiddleware);

app.get('/*', (req: Request, res: Response) => {
  const reactDOM = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDOM));
});

app.listen(1337);
