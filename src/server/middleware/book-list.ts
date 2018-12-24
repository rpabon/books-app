import { Request, Response } from 'express';
import axios from 'axios';
import { getTraversalObj, convertToJson } from 'fast-xml-parser';

export default (req: Request, res: Response) => {
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

  const BASE_URL = 'https://www.goodreads.com';
  const API_KEY = 'lImPPSmrPgewMvaxepEspw';
  const query = req.query.q;

  axios
    .get(`${BASE_URL}/search?key=${API_KEY}&q=${query}`)
    .then(({ data }) => {
      const tObj = getTraversalObj(data, options);
      const jsonObj = convertToJson(tObj, options);
      const books = jsonObj.GoodreadsResponse.search.results.work.map(
        ({ best_book }: any) => ({
          id: best_book.id,
          url: best_book.image_url,
          url_small: best_book.small_image_url,
          title: best_book.title,
          author: best_book.author.name,
          author_id: best_book.author.id
        })
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ books }));
    })
    .catch(error => console.log(error));
};
