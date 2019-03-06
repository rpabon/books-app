import React, { FunctionComponent, useState } from 'react';
import classnames from 'classnames';
import { BookState } from '../../interfaces';
import * as styles from './SimilarBooks.scss';
import content from '../../content';
import SimilarBook from './SimilarBook';
import Button from '../Button/Button';
import '../../assets/chevron-right.svg';
import '../../assets/chevron-left.svg';

const NavButton: FunctionComponent<{
  className?: string;
  onClick: () => void;
  isLeft?: boolean;
}> = ({ onClick, isLeft = true, className }) => (
  <Button onClick={onClick} className={classnames(styles.navButton, className)}>
    <svg>
      <use xlinkHref={`/sprite.svg#chevron-${isLeft ? 'left' : 'right'}`} />
    </svg>
  </Button>
);

const SimilarBooks: FunctionComponent<{ books: BookState[] }> = ({ books }) => {
  const bookWidth = 200;
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    const nextPos = position + 1;
    setPosition(nextPos > books.length - 1 ? 0 : nextPos);
  };

  const prevPosition = () => {
    const prevPos = position - 1;
    setPosition(prevPos < 0 ? books.length - 1 : prevPos);
  };

  const transform = `translate3d(-${position * bookWidth}px, 0, 0)`;

  return (
    <div className={styles.similarBooks}>
      <h3>{content.similarBooks}</h3>

      <div className={styles.outerContainer}>
        <div
          className={styles.innerContainer}
          style={{ width: books.length * bookWidth, transform }}
        >
          {books.map(book => (
            <SimilarBook key={book.id} {...book} />
          ))}
        </div>
      </div>

      <NavButton onClick={prevPosition} className={styles.navButtonLeft} />
      <NavButton onClick={nextPosition} isLeft={false} />
    </div>
  );
};

export default SimilarBooks;
