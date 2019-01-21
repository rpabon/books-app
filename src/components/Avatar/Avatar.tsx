import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import * as styles from './Avatar.scss';

const Avatar: FunctionComponent<{
  className?: string;
  bgImageClass: string;
}> = ({ className, bgImageClass = '' }) => (
  <button type="button" className={classnames(styles.avatar, className)}>
    <div className={classnames(styles.avatarImage, bgImageClass)} />
  </button>
);

export default Avatar;
