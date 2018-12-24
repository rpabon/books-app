import { createContext } from 'react';
import { bookListInitialState } from '../reducers/book-list';

export const BookListContext = createContext({
  state: bookListInitialState,
  dispatch: () => {}
});
