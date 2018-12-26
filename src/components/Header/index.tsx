import React, { SFC } from 'react';
import SearchBar from './SearchBar';

const Header: SFC<{}> = () => {
  return (
    <header>
      <SearchBar />
    </header>
  );
};

export default Header;
