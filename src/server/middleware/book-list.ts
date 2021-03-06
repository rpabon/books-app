import { Request, Response } from 'express';
import axios from 'axios';
import { getTraversalObj, convertToJson } from 'fast-xml-parser';
import { BASE_URL, API_KEY, xmlParserOptions } from './constants';

export default (req: Request, res: Response) => {
  const query = req.query.q;

  axios
    .get(`${BASE_URL}/search?key=${API_KEY}&q=${query}`)
    .then(({ data }) => {
      const tObj = getTraversalObj(data, xmlParserOptions);
      const jsonObj = convertToJson(tObj, xmlParserOptions);
      const books = jsonObj.GoodreadsResponse.search.results.work.map(
        ({ best_book, original_publication_year, average_rating }: any) => ({
          id: best_book.id,
          url: best_book.image_url,
          url_small: best_book.small_image_url,
          title: (best_book.title || '').replace(/ *\([^)]*\) */g, ''),
          author: best_book.author.name,
          author_id: best_book.author.id,
          year: original_publication_year,
          rating: average_rating
        })
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ books }));
    })
    .catch(error => console.log(error));
};
