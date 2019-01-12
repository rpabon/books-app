import React, { FunctionComponent, useState } from 'react';
import { BookState } from '../../interfaces';
import * as styles from './SimilarBooks.scss';
import content from '../../content';
import SimilarBook from './SimilarBook';

const SimilarBooks: FunctionComponent<{ books: BookState[] }> = ({ books }) => {
  const bookWidth = 200;
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    const nextPos = position + 1;
    setPosition(nextPos > books.length ? 0 : nextPos);
  };

  return (
    <>
      <h3>{content.similarBooks}</h3>

      <div className={styles.outerContainer}>
        <div
          className={styles.innerContainer}
          style={{
            width: books.length * bookWidth,
            transform: `translate3d(-${position * bookWidth}px, 0, 0)`
          }}
        >
          {books.map(book => (
            <SimilarBook key={book.id} {...book} />
          ))}
        </div>
      </div>

      <button type="button" onClick={nextPosition}>
        &rarr;
      </button>
    </>
  );
};

export default SimilarBooks;
