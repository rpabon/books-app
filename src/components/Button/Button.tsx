import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import * as styles from './Button.scss';

const Button: FunctionComponent<{
  className?: string;
  type?: string;
  children: ReactNode;
  onClick: (x: any) => any;
}> = ({ type = 'button', className, children, onClick }) => (
  <button
    type={type}
    className={classnames(styles.button, className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
