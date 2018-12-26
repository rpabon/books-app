import React, { SFC, useEffect, useReducer } from 'react';
import { getBook } from '../../store/actions';
import { bookReducer, bookInitialState } from '../../store/reducers/book';
import Loading from '../Loading';
import SingleBook from './SingleBook';
import { Book as BookInterface } from '../../interfaces';

const Book: SFC<{}> = ({ match }) => {
  const url = (match && match.url) || '';
  const [state, dispatch] = useReducer(bookReducer, bookInitialState);

  useEffect(() => getBook(dispatch, url), [url]);

  const { pending, similar_books = [] } = state;

  return pending ? (
    <Loading />
  ) : (
    <>
      <SingleBook {...state} />
      <br />
      <br />
      <br />
      <br />
      <h2>Similar Books:</h2>
      {similar_books.map((book: BookInterface) => (
        <SingleBook key={book.id} {...book} />
      ))}
    </>
  );
};

export default Book;
