import React, { useContext, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../interfaces';
import { BookListContext } from '../../store/contexts';
import Loading from '../Loading';
import styles from './BookList.scss';

const BookList: FunctionComponent<{}> = () => {
  const {
    state: { pending, list },
  } = useContext(BookListContext);

  return pending ? (
    <Loading />
  ) : (
    list.map(({ id, url_small, title, author }: Book) => (
      <li key={id} className={styles.book}>
        <img src={url_small} title={title} />
        <Link to={`/book/${id}`}>{title}</Link>
        <br />
        <small>{author}</small>
        <hr />
      </li>
    ))
  );
};

export default BookList;
