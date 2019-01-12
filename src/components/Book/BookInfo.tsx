import React, { FunctionComponent } from 'react';
import { BookState } from '../../interfaces';
import * as styles from './Book.scss';
import content from '../../content';

const BookInfo: FunctionComponent<BookState> = ({
  id,
  title,
  image_url,
  author,
  year,
  description
}) => (
  <div className={styles.bookInfoContainer}>
    <img src={image_url} title={title} />

    <div className={styles.bookInfo}>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <h6>
        {content.by} {author}
      </h6>
      {year}

      <p
        className={styles.bookInfoDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  </div>
);

export default BookInfo;
