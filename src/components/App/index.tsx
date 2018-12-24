import React, { createContext, useReducer } from 'react';
import BookList from '../BookList';
import SearchBar from '../Header/SearchBar';

export default () => (
  <>
    <SearchBar />
    <BookList />
  </>
);
