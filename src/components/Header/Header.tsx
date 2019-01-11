import React, { FunctionComponent } from 'react';
import * as styles from './Header.scss';
import Container from '../Container/Container';
import SearchBar from './SearchBar';
import Avatar from '../Avatar/Avatar';
import content from '../../content';

const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <Container flex={true}>
      <h1 className={styles.title}>{content.appName}</h1>
      <SearchBar />
      <Avatar className={styles.avatar} />
    </Container>
  </header>
);

export default Header;
