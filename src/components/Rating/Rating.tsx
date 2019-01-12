import React, { FunctionComponent } from 'react';
import * as styles from './Rating.scss';

const Rating: FunctionComponent<{ rating: number }> = ({ rating }) => {
  return <small className={styles.rating}>{rating}</small>;
};

export default Rating;
