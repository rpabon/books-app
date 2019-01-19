import React, { memo, FunctionComponent } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Book, BookListState, StoreState } from '../../interfaces';
import * as styles from './BookList.scss';
import Container from '../Container/Container';
import Loading from '../Loading/Loading';
import BookItem from './BookItem';

const BookList: FunctionComponent<BookListState> = ({ pending, list = [] }) => (
  <Container
    tag={pending ? 'div' : 'ul'}
    className={classnames(styles.bookList, { [styles.isLoading]: pending })}
  >
    {pending ? (
      <Loading />
    ) : (
      list.map((book: Book) => <BookItem key={book.id} {...book} />)
    )}
  </Container>
);

const mapStateToProps = ({ bookList }: StoreState) => ({
  pending: bookList.pending,
  list: bookList.list
});

export default connect(
  mapStateToProps,
  {}
)(memo(BookList));
