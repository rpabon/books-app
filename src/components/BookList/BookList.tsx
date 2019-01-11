import React, { useContext, FunctionComponent } from 'react';
import classnames from 'classnames';
import { Book } from '../../interfaces';
import { BookListContext } from '../../store/contexts';
import * as styles from './BookList.scss';
import Container from '../Container/Container';
import Loading from '../Loading/Loading';
import BookItem from './BookItem';

const BookList: FunctionComponent<{}> = () => {
  const {
    state: { pending, list }
  } = useContext(BookListContext);

  return (
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
};

export default BookList;
