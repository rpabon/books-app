import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './containers/App';
import axios from 'axios';
import { getTraversalObj, convertToJson } from 'fast-xml-parser';

const htmlTemplate = (reactDOM: string) => `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Page Title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
      <div id="root">${reactDOM}</div>
      <script src="/main.js"></script>
  </body>
  </html>
`;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/books', (req, res) => {
  const options = {
    attributeNamePrefix: '@_',
    attrNodeName: 'attr', // default is 'false'
    textNodeName: '#text',
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    decodeHTMLchar: false,
    cdataTagName: '__cdata', // default is 'false'
    cdataPositionChar: '\\c'
  };

  axios
    .get(
      'https://www.goodreads.com/search?key=lImPPSmrPgewMvaxepEspw&q=hyperion'
    )
    .then(({ data }) => {
      const tObj = getTraversalObj(data, options);
      const jsonObj = convertToJson(tObj, options);
      const books = jsonObj.GoodreadsResponse.search.results.work;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ books }));
    })
    .catch(error => console.log(error));
});

app.get('/', (req, res) => {
  const reactDOM = renderToString(<App />);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDOM));
});

app.listen(1337);
