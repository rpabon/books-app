import React, { useEffect, useReducer, FunctionComponent } from 'react';
import { getBook } from '../../store/actions';
import { bookReducer, bookInitialState } from '../../store/reducers/book';
import Loading from '../Loading/Loading';
import Container from '../Container/Container';
import BookInfo from './BookInfo';
import SimilarBooks from '../SimilarBooks.tsx/SimilarBooks';

const Book: FunctionComponent<{ match: any }> = ({ match }) => {
  const url = (match && match.url) || '';
  const [bookState, dispatch] = useReducer(bookReducer, bookInitialState);
  const { pending, similar_books = [] } = bookState;

  useEffect(() => getBook(dispatch, url), [url]);

  return pending ? (
    <Loading />
  ) : (
    <Container>
      <BookInfo {...bookState} />
      {similar_books.length > 0 && <SimilarBooks books={similar_books} />}
    </Container>
  );
};

export default Book;
