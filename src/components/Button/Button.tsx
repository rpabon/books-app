import React, { FunctionComponent, ReactNode, memo } from 'react';
import * as styles from './Button.scss';

const Button: FunctionComponent<{
  type?: string;
  children: ReactNode;
  onClick: (x: any) => any;
}> = ({ type = 'button', children, onClick }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);
