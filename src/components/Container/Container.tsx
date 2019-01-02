import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import * as styles from './Container.scss';

const Container: FunctionComponent<{
  children: ReactNode[];
  tag?: string;
  extraClasses?: string;
  flex?: boolean;
}> = ({ children, tag: Tag = 'div', extraClasses, flex }) => (
  <Tag
    className={classnames(extraClasses, styles.container, {
      [styles.flex]: flex
    })}
  >
    {children}
  </Tag>
);

export default Container;
