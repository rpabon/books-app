import React, { FunctionComponent, memo } from 'react';
import { BookState } from '../../interfaces';
import { Link } from 'react-router-dom';
import * as styles from './SimilarBooks.scss';
import Rating from '../Rating/Rating';

const SimilarBook: FunctionComponent<BookState> = ({
  id,
  title,
  small_image_url,
  author,
  rating
}) => (
  <Link className={styles.book} to={`/book/${id}`}>
    <img src={small_image_url} title={title} />

    <div className={styles.bookInfo}>
      <div className={styles.bookInfoTitle}>{title}</div>
      <Rating rating={rating} className={styles.bookInfoRating} />
      <small>{author}</small>
    </div>
  </Link>
);

export default memo(SimilarBook);
