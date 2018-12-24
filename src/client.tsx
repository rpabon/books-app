import React, { useReducer, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { bookListReducer, bookListInitialState } from './reducers/book-list';
import { BookListContext } from './contexts';

const ClientApp: FunctionComponent<{}> = () => {
  const [bookListState, dispatchBookListActions] = useReducer(
    bookListReducer,
    bookListInitialState
  );

  return (
    <BookListContext.Provider
      value={{ state: bookListState, dispatch: dispatchBookListActions }}
    >
      <App />
    </BookListContext.Provider>
  );
};

ReactDOM.hydrate(<ClientApp />, document.getElementById('root'));
