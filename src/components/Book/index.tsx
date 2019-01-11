import React, { useEffect, useReducer, FunctionComponent } from 'react';
import { getBook } from '../../store/actions';
import { bookReducer, bookInitialState } from '../../store/reducers/book';
import Loading from '../Loading/Loading';
import SingleBook from './SingleBook';
import { Book as BookInterface } from '../../interfaces';
import Container from '../Container/Container';

const Book: FunctionComponent<{ match: any }> = ({ match }) => {
  const url = (match && match.url) || '';
  const [state, dispatch] = useReducer(bookReducer, bookInitialState);

  useEffect(() => getBook(dispatch, url), [url]);

  const { pending, similar_books = [] } = state;

  return pending ? (
    <Loading />
  ) : (
    <Container>
      <SingleBook {...state} />
      <br />
      <br />
      <br />
      <br />
      <h2>Similar Books:</h2>
      {similar_books.map((book: BookInterface) => (
        <SingleBook key={book.id} {...book} />
      ))}
    </Container>
  );
};

export default Book;
