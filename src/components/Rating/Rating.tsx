import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import '../../assets/star.svg';
import '../../assets/star-filled.svg';
import * as styles from './Rating.scss';

const Stars: FunctionComponent<{ filled?: boolean; width?: string }> = ({
  filled = false,
  width
}) => {
  const filledString = filled ? '-filled' : '';

  return (
    <div className={styles.starContainer} style={{ width }}>
      {[...Array(5)].map((x, i) => (
        <svg
          key={`${i}${filledString}`}
          className={classnames({
            [styles.starFilled]: filled,
            [styles.star]: !filled
          })}
        >
          <use xlinkHref={`/sprite.svg#star${filledString}`} />
        </svg>
      ))}
    </div>
  );
};

const Rating: FunctionComponent<{ rating: number; className?: string }> = ({
  rating,
  className
}) => (
  <div
    className={classnames(styles.ratingContainer, className)}
    title={`${rating}`}
  >
    <Stars />
    <Stars filled={true} width={`${Math.round(rating * 10)}%`} />
  </div>
);

export default Rating;
