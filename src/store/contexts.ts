import { createContext } from 'react';
import { bookListInitialState } from './reducers/book-list';
import { bookInitialState } from './reducers/book';

export const BookListContext = createContext({
  state: bookListInitialState,
  dispatch: () => {}
});

export const BookContext = createContext({
  state: bookInitialState,
  dispatch: () => {}
});
