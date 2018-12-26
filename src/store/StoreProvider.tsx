import React, { useReducer } from 'react';
import { bookListReducer, bookListInitialState } from './reducers/book-list';
import { BookListContext } from './contexts';

export default ({ children }: any) => {
  const [bookListState, dispatchBookListActions] = useReducer(
    bookListReducer,
    bookListInitialState
  );

  return (
    <BookListContext.Provider
      value={{ state: bookListState, dispatch: dispatchBookListActions }}
    >
      {children}
    </BookListContext.Provider>
  );
};
