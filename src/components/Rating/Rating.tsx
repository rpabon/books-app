import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import * as styles from './Rating.scss';

const Rating: FunctionComponent<{ rating: number; className?: string }> = ({
  rating,
  className
}) => (
  <div
    className={classnames(styles.ratingContainer, className)}
    title={`${rating}`}
  >
    <div className={styles.ratingEmpty} />
    <div
      className={styles.ratingFilled}
      style={{ width: Math.round(rating * 48) }}
    />
  </div>
);

export default Rating;
