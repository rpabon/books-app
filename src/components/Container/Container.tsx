import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import * as styles from './Container.scss';

const Container: FunctionComponent<{
  children: ReactNode;
  tag?: string;
  className?: string;
  flex?: boolean;
}> = ({ children, tag: Tag = 'div', className, flex }) => (
  <Tag
    className={classnames(className, styles.container, {
      [styles.flex]: flex
    })}
  >
    {children}
  </Tag>
);

export default Container;
