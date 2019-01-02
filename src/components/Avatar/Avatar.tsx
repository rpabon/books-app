import React, { FunctionComponent } from 'react';
import * as styles from './Avatar.scss';
import logo from '../../assets/logo@2x.png';

const Avatar: FunctionComponent = () => {
  return (
    <button type="button" className={styles.avatar}>
      <img src={logo} />
    </button>
  );
};

export default Avatar;
