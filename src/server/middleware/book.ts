import { Request, Response } from 'express';
import axios from 'axios';
import { BASE_URL, API_KEY, xmlParserOptions } from './constants';
import { getTraversalObj, convertToJson } from 'fast-xml-parser';

const parseBook = ({
  id,
  title = {},
  isbn,
  image_url,
  small_image_url,
  publication_year,
  description,
  average_rating,
  num_pages,
  authors: { author = {} },
  similar_books,
  work = {}
}: any) => ({
  id,
  title: work.original_title || title.__cdata,
  year: (work && work.original_publication_year) || publication_year,
  rating: average_rating,
  ...(image_url && { image_url: image_url.__cdata || image_url }),
  ...(small_image_url && {
    small_image_url: small_image_url.__cdata || small_image_url
  }),
  ...(isbn && isbn.__cdata && { isbn: Number(isbn.__cdata) }),
  ...(description &&
    description.__cdata && { description: description.__cdata }),
  ...(num_pages &&
    num_pages.__cdata && { num_pages: Number(num_pages.__cdata) }),
  ...(author.id && { author_id: Number(author.id) }),
  ...(author.name && { author: author.name }),
  ...(author.image_url &&
    author.image_url.__cdata && { author_image_url: author.image_url.__cdata }),
  ...(similar_books &&
    Array.isArray(similar_books.book) && {
      similar_books: similar_books.book.map((b: any) => parseBook(b))
    })
});

export default (req: Request, res: Response) => {
  const id = req.query.id;

  axios
    .get(`${BASE_URL}/book/show/${id}?key=${API_KEY}`)
    .then(({ data }) => {
      const tObj = getTraversalObj(data, xmlParserOptions);
      const jsonObj = convertToJson(tObj, xmlParserOptions);
      const raw = jsonObj.GoodreadsResponse;
      const book = parseBook(raw.book);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ book, raw }));
    })
    .catch(error => console.log(error));
};
