import React, { useEffect, memo, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { BookState, StoreState } from '../../interfaces';
import { getBook } from '../../store/actions';
import Loading from '../Loading/Loading';
import Container from '../Container/Container';
import BookInfo from './BookInfo';
import SimilarBooks from '../SimilarBooks/SimilarBooks';
import * as styles from './Book.scss';

interface IBook extends BookState {
  match: any;
  pending: boolean;
  getBook: (id: number) => {};
}

const Book: FunctionComponent<IBook> = ({
  match = {},
  getBook,
  pending,
  similar_books = [],
  ...bookInfo
}) => {
  const id = Number(match.params && match.params.id);

  useEffect(
    () => {
      if (bookInfo.id !== id) {
        getBook(id);
      }
    },
    [id]
  );

  return pending ? (
    <Loading />
  ) : (
    <Container className={styles.bookContainer}>
      <BookInfo {...bookInfo} />
      {similar_books.length > 0 && <SimilarBooks books={similar_books} />}
    </Container>
  );
};

const mapStateToProps = ({ book }: StoreState) => ({
  id: book.id,
  pages: book.pages,
  author_id: book.author_id,
  author_image_url: book.author_image_url,
  isbn: book.isbn,
  small_image_url: book.small_image_url,
  rating: book.rating,
  title: book.title,
  image_url: book.image_url,
  author: book.author,
  year: book.year,
  description: book.description,
  pending: book.pending,
  similar_books: book.similar_books
});

export default connect(
  mapStateToProps,
  { getBook }
)(memo(Book));
