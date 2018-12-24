import React, { memo, SFC, useContext } from 'react';
import { Book } from '../../interfaces';
import Loading from '../Loading';
import { BookListContext } from '../../contexts';

const BookList: SFC<{}> = () => {
  const { state: { pending, list } } = useContext(BookListContext);

  return pending ? (
    <Loading />
  ) : (
    list.map(({ id, url_small, title, author }: Book) => (
      <li key={id}>
        <img src={url_small} title={title} />
        {title}
        <small>{author}</small>
      </li>
    ))
  );
};

export default BookList;
