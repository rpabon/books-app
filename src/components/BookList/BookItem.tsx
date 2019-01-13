import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../interfaces';
import * as styles from './BookItem.scss';
import Rating from '../Rating/Rating';

const BookItem: FunctionComponent<Book> = ({
  id,
  url,
  title,
  author,
  year,
  rating
}) => (
  <li>
    <Link to={`/book/${id}`} className={styles.item}>
      <div className={styles.textContainer}>
        <h6
          className={styles.itemTitle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <Rating rating={rating} className={styles.bookItemRating} />

        <div className={styles.footer}>
          <span>{author}</span>
          <small className={styles.year}>{year}</small>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div
          style={{ backgroundImage: `url(${url})` }}
          className={styles.imageBackground}
        />
        <img src={url} title={title} />
      </div>
    </Link>
  </li>
);

export default BookItem;
