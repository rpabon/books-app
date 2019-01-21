import React, { FunctionComponent } from 'react';
import { BookState } from '../../interfaces';
import { Link } from 'react-router-dom';

const SingleBook: FunctionComponent<BookState> = ({
  id,
  title,
  image_url,
  author,
  year,
  description
}) => {
  return (
    <>
      <Link to={`/book/${id}`}>
        <img src={image_url} title={title} />
      </Link>
      <h3>{title}</h3>
      <small>
        <b>{author}</b>
      </small>
      <small>{year}</small>
      <br />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </>
  );
};

export default SingleBook;
