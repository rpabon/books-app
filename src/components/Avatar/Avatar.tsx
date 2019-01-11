import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import * as styles from './Avatar.scss';
import logo from '../../assets/logo@2x.png';

const Avatar: FunctionComponent<{ className?: string }> = ({ className }) => (
  <button type="button" className={classnames(styles.avatar, className)}>
    <img src={logo} />
  </button>
);

export default Avatar;
