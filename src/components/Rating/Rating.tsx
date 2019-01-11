import React, { FunctionComponent } from 'react';
import * as styles from './Rating.scss';
import { Star } from './stars';

const Rating: FunctionComponent<{ rating: number }> = ({ rating }) => {
  // const getFullStars = rating => {

  //   for (let i = 0; i <= Math.floor(rating); i++) {

  //   }
  // };

  return (
    <div className={styles.rating}>
      {Array(5)
        .fill('')
        .map((item, i) => (
          <Star key={i} />
        ))}
    </div>
  );
};

export default Rating;
