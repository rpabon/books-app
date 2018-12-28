import React, { SFC } from 'react';
import SearchBar from './SearchBar';
import * as styles from './Header.scss';

const Header: SFC<{}> = () => {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  );
};

export default Header;
