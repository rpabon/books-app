import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import * as styles from './Loading.scss';

const Loading: FunctionComponent<{ className?: string }> = ({ className }) => (
  <div className={classnames(styles.spinner, className)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loading;
