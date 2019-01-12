import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.scss';
import Container from '../Container/Container';
import SearchBar from './SearchBar';
import Avatar from '../Avatar/Avatar';
import content from '../../content';

const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <Container flex={true}>
      <Link to="/">
        <h1 className={styles.title}>{content.appName}</h1>
      </Link>

      <SearchBar />

      <Avatar />
    </Container>
  </header>
);

export default Header;
